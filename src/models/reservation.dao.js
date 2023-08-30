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

const getExistingReservations = async(roomId) => {
    const [reservationResult] = await AppDataSource.query (
    `SELECT 
        start_date, 
        end_date 
    FROM 
        reservations 
    WHERE 
        room_id = ?;
    `,
    [roomId]
)
return reservationResult;
};

module.exports = { createReservation, getExistingReservations };