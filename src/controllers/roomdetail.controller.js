const roomdetailService = require('../services/roomdetail.service'); 
const { catchAsync } = require("../utilities/errorHandle");

const detailRoom =catchAsync(async (req, res) => {
const roomId = req.params.roomId;
const detailRoom = await roomdetailService.detailRoom(roomId);
  res.status(201).json(detailRoom);
  });

 const roomReview = catchAsync(async (req, res) => {
    const roomId = req.params.roomId;
    const roomReview = await roomdetailService.roomReview(roomId);
    res.status(201).json(roomReview);
  });


const createReviews = catchAsync(async (req, res) => {
    const {userId, content, ratings }= req.body;
    const roomId = req.params.roomId
     await roomdetailService.createReviews(userId,roomId,content,ratings);
    res.status(201).json({message : "review created"})
  });

module.exports = { detailRoom ,roomReview,createReviews};
