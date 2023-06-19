let accounts = require("../../accounts");

exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await account.creat(req.body);
    return res.status(201).json(newAccount);
  } catch (error) {
    console.log("Error");
    return res.status(500).json({ message: "Something went wrong" });
  }

  // const newaccounts[accounts.length - 1].id + 1;
  // const newAccount = { ...req.body, funds: 0, id };
  // accounts.push(newAccount);
  //res.status(201).json(newAccount);
};

exports.deleteAccount = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await accounts.findOneAndDelete({ _id: accountId });
    // Pass the accountId from your route parameter to .findById() method and save it in a variable called foundAccount.
    // If foundAccount exists, call the .deleteOne() method on foundAccount.
    if (foundAccount) {
      res.status(204).json({ message: "Account Deleted" });
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", details: error });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const { accountId } = req.params;
    const updateAccount = accounts.findByIdAndUpdate(accountId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateAccount) {
      updateAccount.funds = req.body.funds;
      return res.status(400).json({ msg: "Not found" });
    }
    return res.status(200).json(updatedAccount);
  } catch (error) {
    res.status(404).json({ message: "Account not found" });
  }
};

exports.accountsGet = async (req, res) => {
  try {
    accounts = await account.find();
    res.json(accounts);
    //Customize the attributes so that createdAt and updatedAt are excluded.
  } catch (error) {
    return res.status(500).json({ message: "account not found" });
  }
};

// exports.getAccountByUsername = (req, res) => {
//   const { username } = req.params;
//   const foundAccount = accounts.find(
//     (account) => account.username === username
//   );
//   if (req.query.currency === "usd") {
//     const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
//     res.status(201).json(accountInUsd);
//   }
//   res.status(201).json(foundAccount);
// };
