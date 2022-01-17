const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { User, Recovery } = require('../database/schemas');
const router = express.Router();

module.exports = router;

router.post('/register', (req, res) => {
  if (!req || !req.body || !req.body.name || !req.body.password || !req.body.email) {
    res.status(400).send({ message: 'All fields are required' });
  }if ( req.body.password.length < 6){
    res.status(400).send({ message: 'Password must be at least 6 characters' });
  }

  req.body.email = req.body.email.toLowerCase();

  const { email } = req.body;
  const newUser = User(req.body);

  User.find({ email }, (err, users) => {
    if (err) {
      res.status(400).send({ message: 'Create user failed', err });
      return;
    }
    if (users[0]) {
      res.status(400).send({ message: 'Username exists' });
      return;
    }

    newUser.hashPassword().then(() => {
      newUser.save((err, savedUser) => {
        if (err || !savedUser) {
          res.status(400).send({ message: 'Create user failed', err });
          return;
        } else {
          res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
          return;
        }
      });
    });

  });
});

router.post('/login', (req, res, next) => {
  req.body.email = req.body.email.toLowerCase();
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send(info);
    }
    req.login(user, err => {
      if (err) {
        res.status(401).send({ message: 'Login failed', err });
      }
      res.send({ message: 'Logged in successfully', user: user.hidePassword() });
    });

  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(400).send({ message: 'Logout failed', err });
    }
    req.sessionID = null;
    req.logout();
    res.send({ message: 'Logged out successfully' });
  });
});

router.post('/forgot', (req, res) => {
  req.body.email = req.body.email.toLowerCase();
  console.log(req.body);
  const email = req.body.email;
  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(200).send({ message: 'If this email exists, check your email for a link', err });
      return;
    }
    if (user) {
      const newRecovery = Recovery({ email });

      newRecovery.save((err, savedRecovery) => {
        if (err) {
          console.log(err)
          res.status(200).send({ message: 'If this email exists, check your email for a link', err });
        } else {
          sendRecoveryEmail(savedRecovery._id, email, req.protocol);
          res.status(200).send({ message: 'If this email exists, check your email for a link', err });
        }
      });
    }
  }
  );
});

function sendRecoveryEmail(id, email, protocol) {
  var SibApiV3Sdk = require('sib-api-v3-sdk');
  var defaultClient = SibApiV3Sdk.ApiClient.instance;

  var apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.MAIL_API_KEY;
  var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  var os = require("os");
  var hostname = os.hostname();

  var sendSmtpEmail = {
    to: [{ email }],
    sender: { email: "no-reply@a4d.tech" },
    subject: "Recovery",
    htmlContent: protocol + "://" + (process.env.HOST || hostname) + "/auth/reset/" + id
  }

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + data);
  }, function (error) {
    console.error(error);
  });
}

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err1, salt) => {
      if (err1) { reject(err1); }
      bcrypt.hash(password, salt, (err2, hash) => {
        if (err2) { reject(err2); }
        password = hash;
        resolve(hash);
      });
    });
  });
}

router.post('/reset', (req, res) => {

  if (!req.body.id) {
    res.status(404).send({ message: 'Invalid reset URL!', err });
  }
  Recovery.findById(req.body.id, (err, recoveryEntry) => {
    if (err) {
      res.status(404).send({ message: 'Invalid reset URL!', err });
      return;
    }
    if (recoveryEntry.expires_at < Date.now()) {
      res.status(410).send({ message: 'Link has expired!' })

    } else if (recoveryEntry) {
      User.findOne({ email: recoveryEntry.email }, (err, user) => {
        if (err || !user) {
          res.status(404).send({ message: 'Something went wrong!', err });
        }
        hashPassword(req.body.password).then((hashedPassword) => {
          User.updateOne({ email: recoveryEntry.email }, {
            $set: {
              "password": hashedPassword,
            }
          }, () => {
            res.status(200).send({ message: "Success" })
          });
        })
      });
    }
  });
});