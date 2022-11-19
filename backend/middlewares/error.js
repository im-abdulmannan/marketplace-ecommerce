const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Cast Error
  if (err.name === "CastError") {
    const message = `Resource Not Found. Invalid : ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose Dupicate Key Error
  if (err.name === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = `JsonWebToken is Invalid, Try Again!!!`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expire Error
  if (err.name === "TokenExpireError") {
    const message = `JsonWebToken is Expire, Try Again!!!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
