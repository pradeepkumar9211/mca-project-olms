const sendResponse = require("../utils/sendResponse");

function roleMiddleware(role) {
  return function (req, res, next) {
    if (req.user.role !== role) {
      return sendResponse(res, 403, "Forbidden");
    }
    next();
  };
}

module.exports = roleMiddleware;
