// installed express, path, ejs, mongoose using npm

const express = require('express');
const path = require('path');

const port=8000;

// For accessing our Database
const db = require('./configs/mongoose');
const Todo = require('./models/todo')

const app = express();

// Setting up the view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));


// using express router
app.use('/', require('./routes/index'));



app.listen(port,function(err){
    if (err){
        console.log("Error",err);
        return;
    }
    console.log("Server is running on :",port);
});




