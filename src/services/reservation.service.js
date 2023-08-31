const reservationDao = require("../models/reservation.dao")

// const reservations = async (userId, roomId, startDate, endDate) => {
//     const check = await reservationDao.getExistingReservations(roomId, startDate, endDate);

//     console.log(check);

//     for (let i = 0; i < check.length; i++) {
//       if (check[i].rstartDate > endDate || check[i].rendDate < startDate) {
//         const KST = 9 * 60 * 60 * 1000;
//         startDate = startDate + KST
//         endDate = endDate + KST
//         await reservationDao.createReservation(userId, roomId, startDate, endDate);
//       } else {
//         const err = new Error("Invalid reservation");
//         err.statuscode = 400;
//         throw err;
//       }
//     }
//   };

const reservations =  async (userId, roomId, startDate, endDate) => {
    const reservationCheck = await reservationDao.getExistingReservations(roomId, startDate, endDate);
    const KST = 9 * 60 * 60 * 1000;
    const today = '2023-09-01';
    if(!reservationCheck) {
     if (startDate > today && endDate > today) {
       await reservationDao.createReservation(userId, roomId, startDate, endDate); }
     else {
       const err = new Error("The reservation date cannot be earlier than the current date.");
       err.statuscode = 400;
       throw err;
     }
    } else {
     const err = new Error("The reservation date overlaps with the current date");
     err.statuscode = 400;
     throw err;
    }
 };
 


module.exports = { reservations };