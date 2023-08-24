const paymentDao = require("../models/payment.dao");
const { catchAsync } = require("../utilities/errorHandle");

const list = catchAsync(async (req, res) => {
  const paymentList = await paymentDao.paymentList;

  res.status(200).json({ paymentList });
});

module.exports = { list };
