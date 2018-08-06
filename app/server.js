// Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Friends (DATA)
// =============================================================

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Routes
// =============================================================
// the below routes will be coded out as being done in routing/htmlRoutes and apiRoutes

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname+"/public", "home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname+"/public", "survey.html"));
// });


// Displays all friends commented out as moved to apiRequest.js 
// app.get("/api/friends", function(req, res) {
//   return res.json(friends);
// });



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

