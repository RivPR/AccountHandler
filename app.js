/*
The imports needed to run the application
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var firebase = require("firebase");
var hbs = require('hbs');

/*
This command loads the environment variables
*/
require('dotenv').load();

/*
Below is the command that starts the application, it will look in the .env file for a 
variable named PORT to run the application from
*/
var server = app.listen(process.env.PORT || 8080, function(){
    console.log('AccountHandler up on port: ', server.address().port);
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCOJsmbZbfxJTNmxjx45497_rvXfjX3B_0",
        authDomain: "accounthandler-a5dd7.firebaseapp.com",
        databaseURL: "https://accounthandler-a5dd7.firebaseio.com",
        storageBucket: "accounthandler-a5dd7.appspot.com",
    };
    firebase.initializeApp(config);
    console.log("Firebase running.");
});

/*
Below is where we have our routes and functions stored
*/
app.use(require('./components/routes'));

/*
Helpers to be able to receive JSON messages between endpoints
*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.use('/', express.static('public'));