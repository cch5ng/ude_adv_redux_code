// export a function that has access to express app

module.exports = function(app) {
  // handler for get requests made to express app
  app.get('/', function(req, res, next) {
    res.send(['bottle', 'phone', 'paper']);

  });

}