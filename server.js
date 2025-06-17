//include Express
const express = require('express');

//includes .env file for credentials
require('dotenv').config();

//manages database connectivity
require('./models/mongoose');


//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

//reference test json file of users
var data = require('./test.json');

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
//app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));
//index/home URL
app.get('/',(req,res)=>{
    let title = "Home Page";
    res.render('pages/index',{'title': title});
});

//about URL
app.get('/about',(req,res)=>{
    let title = "About Page";
    res.render('pages/about',{'title': title});
});

const recipeRoutes = require('./routes/recipes');
app.use('/recipes', recipeRoutes);


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
  console.log(data);
});

