const User = require('../models/user');

exports.signup = function(req, res, next) {
  // check if user exists (email/pwd)
  // req.body
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'email and password are required'});
  }

  User.findOne({ email: email }, function(err, existingUser) {
    // handle network err
    if (err) {
      return next(err);
    }

    // if user with email exists, return err
    if (existingUser) {
      return res.status(422).send({ error: 'user with email already exists' });
    } else {
    // if user with email not exists, create user
      const user = new User({ 
        email,
        password
      });
      user.save(function(err, user) {
        if (err) return next(err);
        // return resp
        res.json({ success: true });
      });
    }
  })
}
