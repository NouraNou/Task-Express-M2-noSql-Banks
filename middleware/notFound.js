const notFound = (req, res, next) => {
  console.log("Path not found");
  res.status(404).json({ msg: "Path not found!" });
};

module.exports = notFound;
