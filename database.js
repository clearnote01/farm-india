var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Connect to mongodb server 
mongoose.connect('mongodb://localhost:27017/test', function(err) {
    console.log(err);
});

// Schema for userprofile
var profileSchema = new Schema({
  uname: String,
  name: String,
  password: String,
  village: String,
  phone: String,
  occupation: String,
  crops: [{cropname: String, cropprice: Number}]
});

var profile = mongoose.model('Profile',profileSchema);

// Sample element
//var utk_prof = new profile({
  //name: 'Utkarsh',
  //password: 'karma',
  //village: 'siwan',
  //phone: '9919001816',
  //crops: [{cropname: 'rice', cropprice: '123'}]
//});
//utk_prof.save()
//
var attr = {
  mong: mongoose,
  prof: profile
};

exports.attr = attr;
