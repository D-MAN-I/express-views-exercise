function getAccountAtId(accounts, id) {
  return accounts[id];
}

function getAccounts(accounts) {
  return accounts;
}

function addNewAccount(accounts, newAccount) {
  accounts.push(newAccount);

  return accounts.length-1;
}

function replaceAccountAt(accounts, id, newAccount) {
  accounts[id] = newAccount;

  return accounts;
}

function deleteAccountAt(accounts, id) {
  accounts.splice(id, 1);

  return accounts;
}

module.exports = {
  getAccountAtId,
  getAccounts,
  addNewAccount,
  replaceAccountAt,
  deleteAccountAt
};
