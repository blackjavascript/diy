// As we have limited number of routes,
// all routes are put here, instead of moduler approach.

const _ = require('lodash');

module.exports = function(app) {
  // Global error handler to send output.
  app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send('Server error!');
  });
}
