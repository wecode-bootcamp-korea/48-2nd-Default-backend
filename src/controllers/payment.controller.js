const paymentService = require("../services/payment.service");
const { catchAsync } = require("../utilities/errorHandle");

const list = catchAsync(async (req, res) => {
  const { room_id, start_date } = req.query;
  const paymentList = await paymentService.paymentList(room_id, start_date);

  res.status(200).json(paymentList);
});

module.exports = { list };
