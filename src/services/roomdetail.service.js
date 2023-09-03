const roomdetaildao = require('../models/roomdetail.dao');

const detailRoom = async (roomId) => {
  return await roomdetaildao.getDetail(roomId)
}

const roomReview = async (roomId) => {
  return await roomdetaildao.roomReview(roomId)
}

const createReview = async (userId, roomId, content, ratings) => {
  return await roomdetaildao.createReviews(userId, roomId, content, ratings);
};

module.exports = { detailRoom, roomReview, createReview };