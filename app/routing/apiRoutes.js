
// ---------- LOAD DATA ---------- //

var friends = require("../data/friends");


// ---------- ROUTING ---------- //

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var userScores = req.body.scores;
    var bestMatch = friends[0];
    var bestMatchScore = 40;
    // Compare user's scores with each friend's scores
    friends.forEach(element => {
      var totalDifference = 0;
      for (var i = 0; i < userScores.length; i++) {
        totalDifference += Math.abs(userScores[i] - element.scores[i]);
      }
      if (totalDifference < bestMatchScore) {
        bestMatch = element;
        bestMatchScore = totalDifference;
      }
    });
    // Return the best match
    res.json(bestMatch);
  });
}
