const reservationDao = require("../models/reservation.dao")

const createReservation =  async (userId, roomId, startDate, endDate) => {
   // 예약 가능한 날짜를 확인
   
   // if 예약 가능 -> createRservation
   await reservationDao.createReservation(userId, roomId, startDate, endDate);
    // if 가능하지 않으면 -> throw ERROR("INVALID DATE")
    const isReservationImpossible = await checkReservationAvailability(roomId, startDate, endDate);

if (!isReservationImpossible) {
    throw new Error("Requested dates are not available for reservation");
};

for (const reservation of existingReservations) {
   if (startDate < reservation.end_date && endDate > reservation.start_date) {
       return false;
   }
};
}

module.exports = { createReservation };