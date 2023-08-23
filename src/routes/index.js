const express = require("express");
const routes = express.Router();
const { roomRouter } = require("./roomRouter");

routes.use("/rooms", roomRouter);

module.exports = { routes };
