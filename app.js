var express = require('express');
var app = express();
require('dotenv').load();

var server = app.listen(process.env.PORT || 8080, function(){
    // console.log(process.env);
    console.log("AccountHandler up on port: ", server.address().port);
});