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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// (DATA)
// =============================================================

var newReservation = [{
    customerName: "John George",
    phoneNumber: "4804567837",
    customerEmail: "johngeorge@gmail.com",
    customerID: 25

}];

var waitlist = [];

// Routes
// =============================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Create New Data - takes in JSON input
app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    if (newReservation.length >= 5) {
        waitlist.push(newTable);
        res.json(false);

    } else {

        console.log(newTable);
        newReservation.push(newTable);
        res.json(true);
    };

});


app.get("/api/tables", function(req, res) {

    console.log(newReservation);

    res.json(newReservation)

});


app.get("/api/waitlist", function(req, res) {

    console.log(waitlist);

    res.json(waitlist)

});

// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || PORT, function() {
    console.log("App listening on PORT " + PORT);
});