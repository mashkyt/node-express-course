const express = require('express'); // search for module express
const app = express(); // create app as an instance with express constructor

const mockUserData = [
    {name: 'Mack'},
    {name: 'Jill'}
];

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'Successfully got this. Good job!',
        users: mockUserData
    })
});

app.get('/users/:id', function(req, res){
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'Successfully got this. Good job!',
        users: req.params.id
    })
});

app.listen(8000, function(){
    console.log("server is running");
}); // listen to port 8000


