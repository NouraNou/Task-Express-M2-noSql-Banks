const errorHandler = (error, req, res, next) => {
  console.log(error);

  res.status(500).json({
    msg: "There is an error",
    error: error.message,
  });
};

module.exports = errorHandler;
