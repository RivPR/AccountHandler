/*
The imports needed to run the file
*/
var express = require('express');
var router = express.Router();

/** 
Telling the program that we want to run the home file from the root address
**/
router.use('/', require('./home'));

module.exports = router;