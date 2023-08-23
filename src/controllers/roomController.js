const { roomService } = require("../services");

const getAllRooms = async (req, res) => {
  const userId = req.user.id;
  const rooms = roomService.getAllRooms(userId);

  res.status(200).json({ data: rooms });
};

const getRoomsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  const userId = req.user.id;
  const rooms = roomService.getRoomsByCategory(categoryId, userId);

  res.status(200).json({ data: rooms });
};

const getRoomsByRegion = async (req, res) => {
  const { regionId } = req.params;
  const userId = req.user.id;
  const rooms = roomService.getRoomsByRegion(regionId, userId);

  res.status(200).json({ data: rooms });
};

module.exports = {
  getAllRooms,
  getRoomsByCategory,
  getRoomsByRegion,
};
