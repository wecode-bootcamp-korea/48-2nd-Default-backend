const { AppDataSource } = require("./data-source");

const paymentlist = async (room_id, start_date) => {
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
    WHERE u.id = 1 AND r.id = ? AND rs.start_date = ?;
    `,
    [room_id, start_date]
  );
  return list;
};

module.exports = { paymentlist };
