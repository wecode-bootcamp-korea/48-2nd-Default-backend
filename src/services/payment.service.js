const paymentDao = require("../models/payment.dao");

const paymentList = async (userId, roomId, startDate) => {
  return await paymentDao.paymentlist(userId, roomId, startDate);
};

module.exports = { paymentList };
