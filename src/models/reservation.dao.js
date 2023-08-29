const { AppDataSource } = require("./data-source")

const isReservationImpossible = await checkReservationAvailability(roomId, startDate, endDate);

if (!isReservationImpossible) {
    throw new Error("Requested dates are not available for reservation");
};

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

const checkReservationAvailability = async (roomId, startDate, endDate) => {

    const existingReservations = await AppDataSource.query (
        'SELCET start_date, end_date FROM reservations WHERE room_id = ?',
        [roomId]
    );

    for (const reservation of existingReservations) {
        if (startDate < reservation.end_date && endDate > reservation.start_date) {
            return false;
        }
    }
    return true;
}

module.exports = { createReservation };