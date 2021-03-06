const { AssertionError } = require('assert');

module.exports = (err, req, res, next) => {
  if (err instanceof AssertionError) {
    res.status(400);
    return res.send({
      error: 'invalid_request',
      error_description: err.message,
      state: req.query.state
    });
  }
  // all other errors are not handled here. By default,
  // they will result in a 500 error
  return next(err);
};
