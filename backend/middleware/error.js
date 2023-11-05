class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // wrong MongodbId error - cast error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;

    // passing error to the error class
    err = new ErrorHandler(message, 400); // 400 (Bad request)
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // sending response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
