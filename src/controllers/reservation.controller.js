const { catchAsync } = require("../utilities/errorHandle");
const reservationService = require("../services/reservation.service");


const createReservation = catchAsync (async (req, res) => { 
    const {userId, roomId, startDate, endDate} = req.query;
    await reservationService.reservation(userId, roomId, startDate, endDate);

    res.status(200).json("Complete Reservation")

})

module.exports = { createReservation };


