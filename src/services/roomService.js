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
  if (userId)
    return await roomDao.getRoomListWhenLoggedIn(
      userId,
      category,
      location,
      page,
      limit,
      sortBy,
      minPrice,
      maxPrice
    );
  else {
    return await roomDao.getRoomList(
      category,
      location,
      page,
      limit,
      sortBy,
      minPrice,
      maxPrice
    );
  }
};

module.exports = { getRoomList };
