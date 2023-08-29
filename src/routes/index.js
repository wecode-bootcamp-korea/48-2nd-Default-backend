const express = require("express");
const { userRouter } = require("./user.router");
const { paymentRouter } = require("./payment.router");

const routes = express.Router();

routes.use("/user", userRouter);
routes.use("/resevation", userRouter);
routes.use("/payment", paymentRouter);

module.exports = { routes };
