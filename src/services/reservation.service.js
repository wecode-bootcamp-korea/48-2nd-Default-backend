const reservationDao = require("../models/reservation.dao")

const createReservations = async(userId, roomId, startDate, endDate) => {
    

    const checkReservationAvailability = await reservationDao.getExistingReservations(roomId)
    console.log("예약 날짜 :",  checkReservationAvailability);
    console.log(roomId);
    const start = await reservationDao.createReservation;
    if (!checkReservationAvailability) {
        throw new Error("Requested dates are not available for reservation")
    };

    const { start_date, end_date } = checkReservationAvailability;
    
    for (start_date of checkReservationAvailability) {
        if (startDate < end_date && endDate > start_date) {
            const err = new Error("Invalid Date");
            err.statusCode = 400;
            throw err;
        }
        return start;
    };
};


module.exports = { createReservations };