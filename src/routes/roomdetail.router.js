const express = require("express");
const detailRouter = express.Router();


const roomdetailController = require("../controllers/roomdetail.controller");


detailRouter.get("/detail/:roomId", roomdetailController.detailRoom);

detailRouter.get("/review/:roomId", roomdetailController.roomReview);

detailRouter.post("/review/:roomId", roomdetailController.createReview);

module.exports = { detailRouter };