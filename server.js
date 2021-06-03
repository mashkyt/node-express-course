const express = require('express'); // search for module express
const app = express(); // create app as an instance with express constructor

app.listen(8000, function(){
    console.log("server is running");
}); // listen to port 8000