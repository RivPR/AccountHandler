/*
The imports needed to run the file
*/
var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var provider = new firebase.auth.GoogleAuthProvider();
var path = require('path');

module.exports = router;

router.get('/ping', function(req, res){
    res.send({status:201,message:"Success"});
});

router.get('/', function(req, res){
    console.log(__dirname);
    
    // res.sendFile(path.join(__dirname + '/../public/home.html'));
    console.log(process.env.CLIENTID);
    res.render('test2.hbs', {"CLIENTID":process.env.CLIENTID});
});

router.post('/googlelogin', function(req,res){
    if(req.body){
        firebase.auth().signInWithRedirect(provider);
        
        
    
    }
});