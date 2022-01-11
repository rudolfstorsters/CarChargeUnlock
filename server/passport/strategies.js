const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../database/schemas');

const Strategies = module.exports;

const fieldMapping = { usernameField: "email", passwordField: "password" };

Strategies.local = new LocalStrategy(fieldMapping, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Username doesn\'t exist' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect username or password' });
    }
    return done(null, user);
  });
});
