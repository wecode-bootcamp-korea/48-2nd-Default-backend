const paymentDao = require("../models/payment.dao");

const paymentList = async (room_id, start_date) => {
  return await paymentDao.paymentlist(room_id, start_date);
};

module.exports = { paymentList };
