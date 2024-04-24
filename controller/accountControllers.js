const Account = require("../models/account");

const fetchAllAccounts = async (req, res) => {
  // 1. Get all accounts from DB
  // 2. Send the accounts back as a response
  const accounts = await Account.find();
  // --------------------------------(1)
  res.json({ Account: accounts });
  // --------------------------------(2)
};

const fetchAccount = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the account assoc. w/ ID
  // 3.Send response with that account as the payload

  const accountId = req.params.id;
  // --------------------------------(1)
  const account = await Account.findById(accountId);
  // --------------------------------(2)
  res.json({ Account: accounts });
  // --------------------------------(3)
};


const createAccount = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create account
  // 3. Respond with new copy of account
  console.log(`BODY: ${req.body}`);
  const accountNumber = req.body.accountNumber;
  const routingNumber = req.body.routingNumber;
  // const {title,body} = req.body
  // --------------------------------(1)
  const account = await Account.create({
    accountNumber: Number, 
    routingNumber: Number,
  });
  // --------------------------------(2)
  res.json({ Account: accounts });
  // --------------------------------(3)
};

const updateAccount = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Account
  // 4. Retrieve updatedAccount and send it as a response
  const AccountId = req.params.id;
  // --------------------------------(1)
  const { name, email } = req.body;
  // --------------------------------(2)
  const account = await account.findByIdAndUpdate(accountId, {
    accountNumber: Number, 
    routingNumber: Number,
  });
  // --------------------------------(2)
  const updatedAccount = await Account.findById(accountId);
  res.json({ account: updatedAccount });
};

const deleteAccount = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const accountId = req.params.id
  // --------------------------------(1)
  await Account.deleteOne({
    id: accountId
  })
    // --------------------------------(2)
  res.json({success: "Account record has been deleted successfully"})
}

module.exports = {
    fetchAllAccounts,
    fetchAccount,
    createAccount,
    updateAccount,
    deleteAccount
}