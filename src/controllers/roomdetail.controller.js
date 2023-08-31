const roomdetailService = require('../services/roomdetail.service'); 
const { catchAsync } = require("../utilities/errorHandle");

const detailroom =catchAsync(async (req, res) => {
// get roomId frompath parameter 
const roomId = req.params.roomId;
const detailroom = await roomdetailService.detailroom(roomId);
  res.status(201).json(detailroom);
  });

 const roomreview = catchAsync(async (req, res) => {
    const roomId = req.params.roomId;
    const roomreview = await roomdetailService.roomreview(roomId);
    res.status(201).json(roomreview);
  });


const createreviews = catchAsync(async (req, res) => {
    const {user_id, content, ratings }= req.body;
    const room_id = req.params.roomId
     await roomdetailService.createreviews(user_id,room_id,content,ratings);
    res.status(201).json({message : "review created"})
  });

module.exports = { detailroom ,roomreview,createreviews};
