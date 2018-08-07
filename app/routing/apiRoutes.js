// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends data. 
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);

  });
// API POST request from Tucker- need to have something to listen to the post request and process request
  app.post("/api/friends", function(req, res){
    console.log(req.body);
    var user = req.body;

    var closestDiff = 0;
    var closestFriendIndex;
    
    var totalDiff = [];
  

    // now loop through the friends to find the closest match
    for (i= 0; i < friendsData.length; i++) {
      totalDiff[i] = 0;

      var diff = 0;
      // loop through the scores of the friend and find differences
      // between the friends and users scores. 
      // 
      for (var x = 0; x < 10; x++){
        console.log(" ------- x is looping through scores at index: " + x + "--------");
        console.log("friends score index " + friendsData[i].scores[x]);
        console.log("user score: " + user.scores[x]);
      
        diff = parseInt(friendsData[i].scores[x]) - parseInt(user.scores[x]);
        console.log ("diff is : " + diff);
        // make sure difference is a positive number
        if (diff < 0) {
          diff = diff * -1;
        }
        // sum of the total difference for this particular friend
        totalDiff[i] += diff;
      }
    }
    //find the index of the lowest toltalDiff and this will be the most compatable friend
    var lowestDiff = 50;
    var indexLowest;
    for (i=0; i < totalDiff.length; i++) {
      if (totalDiff[i] < lowestDiff) {
        lowestDiff = parseInt(totalDiff[i]);
        indexLowest = i;

      }
    }

    console.log("closest friend match is index " + indexLowest + " with match score difference of " + lowestDiff);


    friendsData.push(req.body);
    console.log("in apiRoutes post");
    console.log("Best matching friend friendsData(indexLowest) " + friendsData[indexLowest]);
    
    res.send(friendsData[indexLowest]);

  });


}
