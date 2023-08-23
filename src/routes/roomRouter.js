const express = require("express");

const { roomController } = require("./controllers");

const router = express.Router();

router.get("", roomController.getAllRooms);
router.get("/:roomId", roomController.getSingleRoom);
router.get("/:categoryId", roomController.getRoomsByCategory);
router.get("/:regionId", roomController.getRoomsByRegion);
// router.post("", roomController.createRoom);
// router.patch("/:roomId", roomController.updateRoom);
// router.delete("/:roomId", roomController.updateRoom);

module.exports = router;
