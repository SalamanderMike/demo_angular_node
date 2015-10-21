var express = require('express'),
	path = require('path'),
	app = express();



// Setup
app.use('/partials', express.static(path.join(__dirname + '/views/partials')));				// PLACE PARTIALS IN /views
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));	// PLACE BOWER DEPENDENCIES
app.use(express.static(__dirname + '/assets'));												// /assets instead of /public
app.set("view engine", "ejs");


// ROUTES
require('./routes/routes')(app);








// NODEMON **************************************
app.listen(process.env.PORT || 3000, function (){
	console.log("NODEMON IS LISTENING... localhost:3000");
});


// EXPORT ***************************************
module.exports = app;
