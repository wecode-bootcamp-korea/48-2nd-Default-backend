const paymentService = require("../services/payment.service");
const { catchAsync } = require("../utilities/errorHandle");

const list = catchAsync(async (req, res) => {
  const { roomId, startDate } = req.query;
  const paymentList = await paymentService.paymentList(roomId, startDate);

  res.status(200).json(paymentList);
});

module.exports = { list };
