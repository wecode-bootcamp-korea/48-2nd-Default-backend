const { AppDataSource } = require("./data-source")


const createReservation = async(userId, roomId, startDate, endDate) => {
     await AppDataSource.query (
        `INSERT INTO reservations (
            user_id,
            room_id,
            start_date,
            end_date)
        VALUES (
            ?,
            ?,
            ?,
            ?
        );
        `,
        [userId, roomId, startDate, endDate]
    );
};

// const getExistingReservations = async(roomId, startDate, endDate) => {
//     const reservationResult = await AppDataSource.query (
//     `SELECT 
//         start_date as rstartDate, 
//         end_date as rendDate
//     FROM 
//         reservations 
//     WHERE

//     ? = room_id  
        
//     ;
//     `,
//     [roomId]
// )
// return reservationResult;
// };

const getExistingReservations = async(roomId, startDate, endDate) => {
    await AppDataSource.query (
      `SELECT
        start_date
        end_date
      FROM
        reservations
      WHERE
        ? >=end_date OR
        ? <=start_date AND
        ? >= now() AND
        ? >= now() AND
        ? = room_id
      `,
      [startDate, endDate, startDate, endDate, roomId]
    );
  };

module.exports = { createReservation, getExistingReservations};