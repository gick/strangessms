// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express');
var bodyParser=require('body-parser')
var firebase = require("firebase-admin");
var serviceAccount = require("./nexmo-app-firebase-adminsdk-1aoks-1361dde4b3.json");
var app = express();
var port = 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://nexmo-app.firebaseio.com"
});
var fireDB =firebase.database()
require('./app/route/routes.js')(app,fireDB); // load our routes and pass in our app and fully configured passport
app.listen(port);
