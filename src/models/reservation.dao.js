const { AppDataSource } = require("./data-source")

const creatReservation = async(userId, roomId, startDate, endDate) => {
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

module.exports = { creatReservation };