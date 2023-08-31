const roomdetaildao = require('../models/roomdetail.dao');

const detailroom = async (roomId) => {
  await roomdetaildao.getDetail(roomId)
  return detail;
}

const roomreview = async (roomId) => {
  await roomdetaildao.roomreview(roomId)
  return review;
}

const createreviews = async (user_id, room_id, content, ratings) => {
  await roomdetaildao.createreviews(user_id, room_id, content, ratings);
  console.log(room_id);
  return create;
};

module.exports = { detailroom, roomreview, createreviews };