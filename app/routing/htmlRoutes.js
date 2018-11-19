//DEPENDENCIES

const path = require("path");

//ROUTING

module.exports = function (app) {
    // HTML GET REQUESTS

    // Handles when users visits a page

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));

    });

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });

    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}