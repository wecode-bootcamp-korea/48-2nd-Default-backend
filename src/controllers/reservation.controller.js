const { catchAsync } = require("../utilities/errorHandle");
const reservationService = require("../services/reservation.service");


const createReservation = catchAsync (async (req, res) => { 
    const {userId, roomId, startDate, endDate} = req.query;
    await reservationService.reservations(userId, roomId, startDate, endDate);
    console.log(roomId);
    res.status(200).json({message: "Complete Reservation"})

});

module.exports = { createReservation };


