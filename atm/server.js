const express = require('express')
const app = express()
const bankApi = require('./api/bankApi.js')

// Register middleware
app.use(express.json())

//add middleware for handlebars here
app.set('view engine', 'hbs')

//global variable to store list of accounts
let accounts = [
  { name: "checking",
    balance: 100,
    isActive: true
  }
];

//Write your HTTP request handlers using RESTful routes here
//call methods in the bankApi as needed. Feel free to modify the API
//as you see fit to accomplish the goals of the app

//accounts GET (all). 
//Sends back a page with all of the accounts listed (only show their names and
//balances)
app.get("", (req, res) => { });

//accounts GET (single)
//Sends. back a single page with the details of a single acount displayed
app.get("/accounts/:id", (req, res) => {

  //get the account from the API (Model)
  let account = bankApi.getAccountAtId(accounts, req.params.id);
  
  //create a View on the single account and send it to the user
  //note: { account } the same as writing { account: account }
  res.render("accounts/account", { account } ); 
});

//accounts POST
//this should add a new POST from req.body to accounts (global variable)
//and sends back the same page to list all accounts.
app.get("", (req, res) => {
});

//accounts PUT (note here you'll need to put /put at the end of your
//path. This is a work around because HTML forms only allow GET and POST
//requests). Make sure the HTML Form has the pattern: action='.../put' 
app.get("", (req, res) => {
});

//accounts DELETE (note here you'll need to put /delete at the end of your
//path. This is a work around because HTML forms only allow GET and POST
//requests). Make sure the HTML Form has the pattern: action='.../put' 
app.get("", (req, res) => { 
});

//keep these lines at the bottom of the file
const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
