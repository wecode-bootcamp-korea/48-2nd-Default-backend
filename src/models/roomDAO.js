const { AppDataSource } = require("./data-source");
const { createSqlFilterQuery } = require("./queryBuilder");

const getRoomListWhenLoggedIn = async (
  userId,
  categoryId,
  locationId,
  page,
  limit,
  sortBy,
  minPrice,
  maxPrice
) => {
  try {
    const { whereQuery, orderingQuery, priceRangeQuery, pageQuery } =
      await createSqlFilterQuery(
        categoryId,
        locationId,
        page,
        limit,
        sortBy,
        minPrice,
        maxPrice
      );
    const data = await AppDataSource.query(
      `
      SELECT
        r.id as roomId,
        r.title as roomTitle,
        r.price,
        ra.beds_count,
        JSON_ARRAYAGG(i.image_url) AS images,
        reviewCounts,
        ratings,
        CASE WHEN r.user_id = ? THEN 1 ELSE 0 END AS isMyPost,
        EXISTS(SELECT 1 FROM room_likes rl WHERE rl.user_id = ? AND rl.room_id = r.id) AS isLiked
        from rooms r
        LEFT JOIN images i ON r.id = i.room_id
        LEFT JOIN (select room_id, COUNT(id) as reviewCounts,
        coalesce (AVG(ratings),0) as ratings from room_reviews group by room_id) rr on rr.room_id = r.id
        LEFT JOIN room_amenities ra on r.id = ra.room_id
        ${whereQuery}${priceRangeQuery}
        GROUP BY r.id, ra.beds_count
        ${orderingQuery}
        ${pageQuery};
     `,
      [userId, userId]
    );
    return data;
  } catch (err) {
    // console.log(err);
    const error = new Error("dataSource Error");
    error.statusCode = 400;
    throw error;
  }
};

const getRoomList = async (
  categoryId,
  locationId,
  page,
  limit,
  sortBy,
  minPrice,
  maxPrice
) => {
  try {
    const { whereQuery, orderingQuery, priceRangeQuery, pageQuery } =
      await createSqlFilterQuery(
        categoryId,
        locationId,
        page,
        limit,
        sortBy,
        minPrice,
        maxPrice
      );
    const data = await AppDataSource.query(
      `
      SELECT
        r.id as roomId,
        r.title as roomTitle,
        r.price,
        ra.beds_count,
        JSON_ARRAYAGG(i.image_url) AS images,
        reviewCounts,
        ratings
        from rooms r
        LEFT JOIN images i ON r.id = i.room_id
        LEFT JOIN (select room_id, COUNT(id) as reviewCounts,
        coalesce (AVG(ratings),0) as ratings from room_reviews group by room_id) rr on rr.room_id = r.id
        LEFT JOIN room_amenities ra on r.id = ra.room_id
        ${whereQuery}${priceRangeQuery}
        GROUP BY r.id, ra.beds_count
        ${orderingQuery}
        ${pageQuery};
     `
    );
    return data;
  } catch (err) {
    console.log(err);
    const error = new Error("dataSource Error");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = { getRoomList, getRoomListWhenLoggedIn };
