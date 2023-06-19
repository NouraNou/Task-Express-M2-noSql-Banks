const express = require("express");
const router = express.Router();
const {
  accountsGet,
  updateAccount,
  deleteAccount,
  accountCreate,
  getAccountByUsername,
} = require("./accounts.controllers");

router.get("/", accountsGet);
// router.get("/:username", getAccountByUsername);
router.post("/", accountCreate);
router.delete("/:accountId", deleteAccount);
router.put("/:accountId", updateAccount);

module.exports = router;
