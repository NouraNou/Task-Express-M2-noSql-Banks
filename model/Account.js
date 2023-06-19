const { module, Schema } = require("mongoose");

const AccountSchema = new Schema({
  username: { username: String, require: true },
  funds: { funds: Number, default: 0 },
});

module.exports = module("Accounts", AccountSchema);
