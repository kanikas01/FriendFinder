
// ---------- DEPENDENCIES ---------- //

var express = require("express");


// ---------- EXPRESS CONFIG ---------- //

// Create an express instance
var app = express();

// Set port
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ---------- ROUTING ---------- //

// Import routing files
// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// ---------- LISTENER ---------- //

// Start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
