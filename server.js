const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");

// ********** TESTING **********
const Event = require("./models/event");
// *****************************

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);



app.get("/api/events", (req, res) => {
  Event.find({}).sort({createdAt: -1}).then(results => res.json(results));
});

app.post("/api/events", (req, res) => {
  console.log(req.body);

  Event.create(req.body).then(dbEvent => {
    res.json(dbEvent);
  })
})




// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/marketToMarket");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
