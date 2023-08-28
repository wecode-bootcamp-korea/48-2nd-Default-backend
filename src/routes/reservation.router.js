const express = require("express");

const reservationController = require("../controllers/reservation.controller");
const reservationRouter = express.Router();

reservationRouter.post("/resevation", reservationController.creatReservation);

module.exports = { reservationRouter };