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
    //find the index of the lowest toltalDiff and thsi will be the most compatable friend
    var lowestDiff = 50;
    for (i=0; i < totalDiff.length; i++) {
      if (totalDiff[i] < lowestDiff) {
        lowestDiff = parseInt(totalDiff[i]);
      }
    }

    console.log("closest friend match is index " + i + " with match score difference of " + lowestDiff);


    friendsData.push(req.body);
    console.log("in apiRoutes post");
    

  });

    // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey... this data is then sent to an array and then the  server compares values 
  // on the friends array.
  // ---------------------------------------------------------------------------


  //code below is from Lizzy's Hot Resturant will delete later
//   app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body-parser middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });
}
