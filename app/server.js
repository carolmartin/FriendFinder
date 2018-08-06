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
var friends = [
  {
    name: "Sponge Bob",
    photo: "/Spongebob.png",
    scores: [
        1,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]         
  },
  {
    name: "Patrick",
    photo: "/Patrick_Star.png",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]         
  },
  {
    name: "Squidward",
    photo: "/squidward.png",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        5
    ]         
  }
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname+"/public", "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname+"/public", "survey.html"));
});

// Displays all friends
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// // Displays a single character, or returns false
// app.get("/api/friends/:friend", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

