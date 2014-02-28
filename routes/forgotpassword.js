// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
    console.log('Rendering forgot password');
	res.render('forgotpassword');
}