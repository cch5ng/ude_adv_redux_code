const Authentication = require('./controllers/authentication');

// export a function that has access to express app
module.exports = function(app) {
  app.post('/signup', Authentication.signup);


  // handler for get requests made to express app
  // app.get('/', function(req, res, next) {
  //   res.send(['bottle', 'phone', 'paper']);
  // });

}