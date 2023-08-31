
const express = require("express");
const detailRouter = express.Router();


const roomdetailController = require("../controllers/roomdetail.controller");


detailRouter.get("/getDetail/:roomId", roomdetailController.detailroom);

detailRouter.get("/getcontent/:roomId", roomdetailController.roomreview);

detailRouter.post("/incontent/:roomId",roomdetailController.createreviews);

module.exports = { detailRouter };
