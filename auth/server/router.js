const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// middleware, using jwt not cookies
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

// export a function that has access to express app
module.exports = function(app) {
  // test
  // app.get('/', requireAuth, function(req, res) {
  //   res.send({ hi: 'there' })
  // });


  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignin, Authentication.signin);

}