const express = require("express");

const reservationController = require("../controllers/reservation.controller");
const reservationRouter = express.Router();

const { loginRequired } = require("../utilities/auth");

reservationRouter.post("", reservationController.createReservation);

module.exports = { reservationRouter };