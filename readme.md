[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# express-views-exercise

## Exercise Objectives

gain practice:

* writing RESTful routes
* Writing an application using MVC
* using `handlebars` to create views

In this assignment, we continue working on your atm app. You will
create a single page that manages a list of bank accounts.

Your web page will need to:

* provide a web page view that lists all bank accounts. This web page should:
  * include a link for each item to go to a page for a single account.
  * provide either a form for creating a new account or a link to a page that has such a form.
  * include a link for each item to delete that account. (stretch goal)
* provide a web page view for a single account. On this page please include:
  * an HTML rendering of all the details for the account
  * a form for updating the details for that account (stretch goal)

# Setup

```
cd atm
npm install
```

## Write Controller

Write RESTFul routes in `server.js` that provides an HTTP controller to the
bankAPI (the Model). See the comments in the file for which routes to create.

__NOTE__ feel free to modify the Model API found in the `api/` directory if you
need to change the functionality the API provides.

## Write Views

Using handlebars write the views necessary to provide a web interface for
interacting with the list of coffee shops.

Put each view in the `./atm/views/` directory.
