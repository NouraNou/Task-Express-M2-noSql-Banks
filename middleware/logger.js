const logger = (req, res, next) => {
  console.log("There is a req comming", req.path);
  next();
};

module.exports = logger;
