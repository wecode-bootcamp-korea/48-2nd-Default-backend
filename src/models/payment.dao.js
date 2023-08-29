const { AppDataSource } = require("./data-source");

const paymentlist = async (
  userId,
  roomId,
  startDate,
  offset = 1,
  limit = 1
) => {
  const list = await AppDataSource.query(
    `
    SELECT
    u.id,
    u.name,
    u.point,
    r.id,
    r.title,
    r.price,
    r.thumb_nail,
    rva.ratings,
    rs.id,
    rs.start_date,
    rs.end_date
    FROM
    reservations rs
    LEFT JOIN users u
    on rs.user_id = u.id
    LEFT JOIN rooms r
    on rs.room_id = r.id
    LEFT JOIN (
      SELECT AVG(ratings) as ratings, room_id from room_reviews group by room_id
    ) rva
    on rva.room_id = r.id
    WHERE u.id = ? AND r.id = ? AND rs.start_date = ?;
    `,
    [userId, roomId, startDate]
  );
  return list;
};

const checkPrice = async (userId) => {
  const [price] = await AppDataSource.query(
    `
    SELECT
    u.point
    FROM
    users u
    WHERE u.id = ?
    `,
    [userId]
  );
  console.log(price);
  return price;
};

const paid = async (userId, roomId, startDate, price) => {
  const test1 = await AppDataSource.query(
    `
    UPDATE
    users AS u,
    reservations AS rs
    SET
    u.point = u.point - ?,
    rs.is_paid = 1
    WHERE
    u.id = ?
    AND rs.user_id = ?
    AND rs.room_id = ?
    AND rs.start_date = ?
    `,
    [price, userId, userId, roomId, startDate]
  );
  return test1;
};

module.exports = { paymentlist, checkPrice, paid };
