const paymentDao = require("../models/payment.dao");

const paymentList = async (userId, roomId, startDate, offset, limit) => {
  return await paymentDao.paymentlist(userId, roomId, startDate, offset, limit);
};

module.exports = { paymentList };
