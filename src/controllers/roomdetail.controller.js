const roomdetailService = require('../services/roomdetail.service'); 
const { catchAsync } = require("../utilities/errorHandle");

const detailRoom =catchAsync(async (req, res) => {
const roomId = req.params.roomId;
const detailroom = await roomdetailService.detailRoom(roomId);
  res.status(200).json(detailroom);
  });

 const roomReview = catchAsync(async (req, res) => {
    const roomId = req.params.roomId;
    const roomreview = await roomdetailService.roomReview(roomId);
    res.status(200).json(roomreview);
  });


const createReview = catchAsync(async (req, res) => {
    const {userId, content, ratings }= req.body;
    const roomId = req.params.roomId
     await roomdetailService.createReview(userId,roomId,content,ratings);
    res.status(201).json({message : "review created"})
  });

module.exports = { detailRoom ,roomReview, createReview};
