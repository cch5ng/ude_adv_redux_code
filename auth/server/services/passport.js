const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// set up options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // if user id in payload matches user in db, call done with user as param
  // else call done with no param

  User.findById(payload.sub, function(err, user) {

    // false 2nd param for no user
    if (err) { return done(err, false) }

    if (user) {
      // null first param for no err
      done(null, user);
    } else {
      done(null, false);
    }
  })


})

// tell passport to use jwt strategy
passport.use(jwtLogin);
