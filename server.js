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


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/login', function(req, res){
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username = req.body.username;
    const password = req.body.password;

    // This should come from the database
    const mockUsername = "BillyTheKid";
    const mockPassword = 'superCrypto';

    if (username == mockUsername && password == mockPassword){
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: "Correct Match",
            token: "encrypted token goes here"
        });
    }
    else{
        res.json({
            success: false,
            message: "Failed Match"
        });
    }
});

app.listen(8000, function(){
    console.log("server is running");
}); // listen to port 8000
