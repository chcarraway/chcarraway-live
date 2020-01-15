const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.MLAB_URI;
mongoose.connect(uri, { useMongoClient: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database connection established successfully");
});

const gamesRouter = require("./src/Games/Route");
const usersRouter = require("./src/Users/Route");

app.use("/games", gamesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
