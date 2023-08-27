const reservationDao = require("../models/reservation.dao")

const reservationBotton =  async (userId, roomId, startDate, endDate) => {
   await reservationDao.creatReservation(userId, roomId, startDate, endDate);
    
};

module.exports = { reservationBotton };