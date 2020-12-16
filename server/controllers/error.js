const errorHandler = (err, req, res, next) => {
  console.log("err", err);

  const status = err.status || 500;
  const error = err.msg || "Something went wrong";

  res.status(status).json({ status, error });
};

module.exports = errorHandler;
