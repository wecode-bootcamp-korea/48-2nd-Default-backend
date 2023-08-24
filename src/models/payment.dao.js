const { AppDataSource } = require("./data-source");

const paymentList = async () => {
  const list = await AppDataSource.query(
    `
    SELECT
    u.id,
    u.point,
    r.id,
    r.title,
    r.price,
    r.thumb_nail,
    rs.id,
    rs.start_date,
    rs.end_date
    FROM
    reservations rs
    LEFT JOIN users u
    on rs.user_id = u.id
    LEFT JOIN rooms r
    on rs.room_id = u.id
    `
  );
  return list;
};

module.exports = { paymentList };
