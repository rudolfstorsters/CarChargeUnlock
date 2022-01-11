const express = require('express');
const { User } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

router.post('/checkusername', (req, res) => {
  const email = req.body.email.toLowerCase();

  User.find({ email }, (err, users) => {
    if (err) {
      res.status(400).send({ message: 'Check username failed', err, email });
    }
    if (users && users[0]) {
      res.send({ available: false, message: 'Username exists', email });
    } else {
      res.send({ available: true, message: 'Username available', email });
    }
  });
});
