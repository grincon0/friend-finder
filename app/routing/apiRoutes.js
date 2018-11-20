const path = require('path');

const friends = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(eq,res){
        res.json(friends);
    });





    app.post("/api/friends", function(req, res){
        let userArr = (req.body);
        let match = [];
        let totalDiff;
        let currentDiff = 0;
        
        for(let i = 0; i < friends.length; i++){

            for(let z = 0; z < userArr.scores.length; z++){
                
                if((friends[i].scores[z] - userArr.scores[z]) !== 0){

                    currentDiff += (Math.abs(friends[i].scores[z] - userArr.scores[z]));
                }
            }

            if(!totalDiff || totalDiff > currentDiff){
                match = friends[i].name;
                totalDiff = currentDiff;
                currentDiff = 0;
            }else{
                currentDiff = 0;
            }
        }

        friends.push(userArr);
        
        res.json({status:"OK", matched: match, diff: totalDiff});

    });
}