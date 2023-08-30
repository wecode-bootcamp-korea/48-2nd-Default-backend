const romdetailService = require('../services/romdetail.service'); 
const { catchAsync } = require("../utilities/errorHandle");



const detailrom =catchAsync(async (req, res) => { 
 const detailrom = await romdetailService.detailrom();

  res.status(201).json(detailrom);
  });


  
 const romreview = catchAsync(async (req, res) => {
    const romreview = await romdetailService.romreview();
    res.status(201).json(romreview);
  });


const createreviews =catchAsync(async (req, res) => {
    const {user_id,room_id,content,ratings }= req.body;
    const createreviews = await romdetailService.createreviews(user_id,room_id,content,ratings);
    res.status(201).json(createreviews)
  });









module.exports = { detailrom ,romreview,createreviews};
