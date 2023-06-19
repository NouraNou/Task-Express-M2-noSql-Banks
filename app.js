let accounts = require("./accounts");
const express = require("express");
const app = express();
const connectDb = require("./database");
const accountsRoutes = require("./api/accounts/accounts.routes");
const dotEnv = require("dotenv");

dotEnv.config();
connectDb();
app.use(express.json());
app.use("/accounts", accountsRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
