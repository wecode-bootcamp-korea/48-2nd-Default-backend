const roomService = require("../services/roomService");
const { catchAsync } = require("../utilities/errorHandle");

const getRoomList = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { categoryId, locationId, page, limit, sortBy, minPrice, maxPrice } =
    req.query;
  const rooms = await roomService.getRoomList(
    userId,
    categoryId,
    locationId,
    page,
    limit,
    sortBy,
    minPrice,
    maxPrice
  );
  console.log(rooms);
  res.status(200).json({ data: rooms });
});

module.exports = { getRoomList };
