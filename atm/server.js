const express = require('express')
const app = express()
const bankApi = require('./api/bankApi.js')

// Register middleware
app.use(express.json())

// Body Parser Middleware (see https://www.youtube.com/watch?v=L72fhGm1tfE&t=2673s at minute 44:35 / 1:14:00)
app.use(express.urlencoded( {extended: false}))

//add middleware for handlebars here
app.set('view engine', 'hbs')

//global variable to store list of accounts
let accounts = [
  { name: "Checking",
    balance: 100,
    isActive: true
  },
  { name: "Savings",
    balance:  500,
    isActive: true
  }
];

//Write your HTTP request handlers using RESTful routes here
//call methods in the bankApi as needed. Feel free to modify the API
//as you see fit to accomplish the goals of the app
app.get("/", (req, res) => {
  res.send('Hello World')
});
//accounts GET (all). 
//Sends back a page with all of the accounts listed (only show their names and
//balances)

app.get("/accounts", (req, res) => {
 let accountList = accounts
 res.render("accounts/all", { accountList } );
});


//Setup for new account page
app.get("/accounts/new", (req, res) => {
  let accountList = accounts
  res.render("accounts/new");
});


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
app.post("/accounts/new", (req, res) => {
  bankApi.addNewAccount(accounts, {
    name: req.body.name,
    balance: req.body.balance,
    isActive: req.body.isActive
  });
  let accountList = bankApi.getAccounts(accounts)
  console.log(req.body)
  res.render("accounts/new", { accountList } );
  //res.send(req.body)
});

//accounts PUT (note here you'll need to put /put at the end of your
//path. This is a work around because HTML forms only allow GET and POST
//requests). Make sure the HTML Form has the pattern: action='.../put' 
app.put("/accounts/:id/put", (req, res) => {
});

//accounts DELETE (note here you'll need to put /delete at the end of your
//path. This is a work around because HTML forms only allow GET and POST
//requests). Make sure the HTML Form has the pattern: action='.../put' 
app.delete("/accounts/:id/delete", (req, res) => { 
});

//keep these lines at the bottom of the file
const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
