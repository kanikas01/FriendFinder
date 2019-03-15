
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
    var totalDifference = 0;
    friends.forEach(element => {
      for (var i = 0; i < userScores.length; i++) {
        console.log(userScores[i], element.scores[i]);
        totalDifference += Math.abs(userScores[i] - element.scores[i]);
      }

      if (totalDifference < bestMatchScore) {
        bestMatch = element;
        bestMatchScore = totalDifference;
      }

    console.log(totalDifference);
    totalDifference = 0;
    });
    
    console.log(bestMatch.name);
    res.json(bestMatch);

  });
}
