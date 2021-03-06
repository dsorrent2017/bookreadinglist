const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB  mongodb://<dbuser>:<dbpassword>@ds139322.mlab.com:39322/heroku_jg3r5m1m
mongoose.connect(process.env.MONGODB_URI ||
   "mongodb://dsorrent2017:99Spooky99@ds139322.mlab.com:39322/heroku_jg3r5m1m"
   );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
