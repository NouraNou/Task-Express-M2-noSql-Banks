const express = require("express");
const app = express();
const connectDb = require("./database");
const accountsRoutes = require("./api/accounts/accounts.routes");
const dotEnv = require("dotenv");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
dotEnv.config();

connectDb();
app.use(express.json());

app.use(logger);

app.use("/accounts", accountsRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
