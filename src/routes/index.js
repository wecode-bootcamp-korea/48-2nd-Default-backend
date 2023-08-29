const express = require("express");
const { userRouter } = require("./user.router");

const routes = express.Router();
const roomRouter = require("./roomRouter");

routes.use("/rooms", roomRouter);

routes.use("/user", userRouter);

module.exports = { routes };
