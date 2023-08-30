
const express = require("express");
const detailRouter = express.Router();


const romdetailController = require("../controllers/romdetail.controller");


detailRouter.get("/getDetail", romdetailController.detailrom);

detailRouter.post("/romreview" ,romdetailController.romreview);

detailRouter.post("/createreview",romdetailController.createreviews);









module.exports = { detailRouter };
 