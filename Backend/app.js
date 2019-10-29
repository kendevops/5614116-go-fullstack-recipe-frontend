const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Recipe = require("./models/recipe");

const app = express();

mongoose
  .connect(
    "mongodb+srv://kenny:yv4BdBeQVGPtnpJt@cluster0-3jtpa.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection to the Mongodb Atlas Successful!");
  })
  .catch(error => {
    console.log("unable to connect to database");
    console.log(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/recipes", (req, res, next) => {
  const recipe = [
    {
      title: "string",
      ingredients: ["string", "string2"],
      instructions: "Here is a list of of what to do",
      difficulty: 4,
      time: 45,
      _id: "hhchh3"
    },
    {
      title: "string1",
      ingredients: ["string3", "string7"],
      instructions: "Here is a list of of what to do in the place",
      difficulty: 5,
      time: 35,
      _id: "hhc3"
    }
  ];
  res.status(200).json(recipe);
});

module.exports = app;
