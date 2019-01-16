//load all the required npms
const express = require("express");
const mongoose = require("mongoose");

//require API routes 
const routes = require("./routes");

//set up server and initialize express
const PORT = process.env.PORT || 3001;
const app = express();


// middleware ==================================================
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {app.use(express.static("client/build"))}

app.use(routes);

//this is in the index.js file in the routes>api folder
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

// Connect to the Mongo DB (this also creates the DB if not already created, but not showing in robo3t?)
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact" 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
console.log(MONGODB_URI);

//set the server listening
app.listen(PORT, function(){
console.log("Server Listening at http://localhost:" + PORT);
});