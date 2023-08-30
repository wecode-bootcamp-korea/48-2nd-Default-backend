const roomDao = require("../models/roomDao");

const getRoomList = async (
  userId,
  category,
  location,
  page,
  limit,
  sortBy,
  minPrice,
  maxPrice
) => {
  return await roomDao.getRoomList(
    userId,
    category,
    location,
    page,
    limit,
    sortBy,
    minPrice,
    maxPrice
  );
};

module.exports = { getRoomList };
