const paymentDao = require("../models/payment.dao");

const paymentList = async (roomId, startDate) => {
  return await paymentDao.paymentlist(roomId, startDate);
};

module.exports = { paymentList };
