const express = require("express");
const db = require("./db");
const cors = require("cors");
const PORT = "8081";

const app = express();
app.use(cors());
// Mount on API
app.use("/api", require("./api"));

// Syncing DB Function
const syncDB = () => db.sync();

// Run server function
const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;