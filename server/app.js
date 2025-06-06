// 'Import' the Express module instead of http

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const recipes = require("./routers/recipes");
const contacts = require("./routers/contacts");

// Initialize the Express application

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value

// Connect to database if MONGODB env variable is set
let dbConnected = false;

if (process.env.MONGODB) {
  try {
    mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on("error", (err) => {
      console.error("MongoDB Connection Error:", err.message);
      dbConnected = false;
    });
    db.once("open", () => {
      console.log("Successfully opened connection to MongoDB!");
      dbConnected = true;
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
  }
} else {
  console.log("No MongoDB connection string provided. Running without database.");
}

// Export connection status for routes
global.dbConnected = dbConnected;

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};



app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./dist"));
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.get("/echo/:content", (request, response) => {
  // express adds a "params" Object to requests
  const content = request.params.content;
  // handle GET request for post with an id of "id"
  response.status(418).json({ echoed: content });
});

app.use("/recommendations", recipes);
app.use("/contacts", contacts);

// For any route not handled by the server, send back the index.html file
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: "./dist" });
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
