const express = require("express");
const detailRouter = express.Router();


const roomdetailController = require("../controllers/roomdetail.controller");


detailRouter.get("/details/:roomId", roomdetailController.detailRoom);

detailRouter.get("/content/:roomId", roomdetailController.roomReview);

detailRouter.post("/writing/:roomId", roomdetailController.createReviews);

module.exports = { detailRouter };