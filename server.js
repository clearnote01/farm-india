var express = require('express');
var bodyparser = require('body-parser');
var database = require('./database.js');
var mongoose = database.attr.mong;
var profile = database.attr.prof;
var app = express();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// Use bodyparser module: deprecated
//app.use(bodyparser());
let urlEncodedParser = bodyparser.urlencoded({extended:false});
let jsonParser = bodyparser.json()

// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname));

// set the home page route
app.get('/', function(req, res) {
    //// make sure index is in the right directory. In this case /app/index.html
    //res.render('inde');
          res.sendFile(__dirname+'/main_page.html');
  console.log("index");
});

app.get('/contact', function(req,res) {
  res.sendFile(__dirname+'/public/contactus.html');
});

app.get('/signin', function(req,res) {
  res.sendFile(__dirname+'/signup.html');
});

app.get('/new_route', function(req,res) {
  res.sendFile(__dirname+'/signup.html');
});
app.post('/signup', urlEncodedParser, function(req, res) {
  if (! req.body) return res.sendStatus(400);
  let f_uname = req.body.f_uname;
  let f_passwd = req.body.f_passwd;
  let f_location = req.body.f_location;
  let f_phone = req.body.f_phone;
  let f_occupation = req.body.f_occupation;
  var new_user = new profile({
    name: f_uname,
    password: f_passwd,
    village: f_location,
    occupation: f_occupation,
    phone: f_phone
  });
  new_user.save();
  console.log(new_user);
  res.redirect('/hero');
});

app.get('/hero',function(req,res) {
  res.sendFile(__dirname+'/index.html');
  console.log('get main_page');
});

app.use(express.static(__dirname));

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
