const express = require("express");

const paymentController = require("../controllers/payment.controller");
const paymentRouter = express.Router();

paymentRouter.get("/list", paymentController.list);
module.exports = { paymentRouter };
