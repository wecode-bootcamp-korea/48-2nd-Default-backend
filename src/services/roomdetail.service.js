const roomdetaildao = require('../models/roomdetail.dao');

const detailRoom = async (roomId) => {
  const detailRoom= await roomdetaildao.getDetail(roomId)
  return detailRoom;
}

const roomReview = async (roomId) => {
 const roomReview = await roomdetaildao.roomReview(roomId)
  return roomReview;
}

const createReviews = async (userId, roomId, content, ratings) => {
  const createReviews = await roomdetaildao.createReviews(userId, roomId, content, ratings);
  return createReviews;
};

module.exports = { detailRoom, roomReview, createReviews };