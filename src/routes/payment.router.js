const express = require("express");

const paymentController = require("../controllers/payment.controller");
const paymentRouter = express.Router();

const { loginRequired } = require("../utilities/auth");

paymentRouter.get("/list", paymentController.getPaymentList);
paymentRouter.put("/paid", paymentController.putPaid);
module.exports = { paymentRouter };
