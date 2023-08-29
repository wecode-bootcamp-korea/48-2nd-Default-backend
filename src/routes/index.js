const express = require("express");
const { userRouter } = require("./user.router");
const { paymentRouter } = require("./payment.router");

const routes = express.Router();
const roomRouter = require("./roomRouter");

routes.use("/rooms", roomRouter);

routes.use("/user", userRouter);
routes.use("/payment", paymentRouter);

module.exports = { routes };
