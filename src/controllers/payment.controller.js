const paymentService = require("../services/payment.service");
const { catchAsync } = require("../utilities/errorHandle");

const getPaymentList = catchAsync(async (req, res) => {
  const { roomId, startDate, offset, limit } = req.query;
  const user = req.user;
  const userId = user.id;
  const paymentList = await paymentService.paymentList(
    userId,
    roomId,
    startDate,
    offset,
    limit
  );

  res.status(200).json(paymentList);
});

module.exports = { getPaymentList };
