const paymentService = require("../services/payment.service");
const { catchAsync } = require("../utilities/errorHandle");

const getPaymentList = catchAsync(async (req, res) => {
  const { roomId, startDate } = req.query;
  const user = req.user;
  const userId = user.id;
  const paymentList = await paymentService.paymentList(
    userId,
    roomId,
    startDate
  );

  res.status(200).json(paymentList);
});

module.exports = { getPaymentList };
