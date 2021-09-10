const express = require("express");
const router = require("./router");

const server = express();

server.use(express.json());
server.use("/api/recipes", router); //enter api url here

server.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Error found, did you try 42?",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
