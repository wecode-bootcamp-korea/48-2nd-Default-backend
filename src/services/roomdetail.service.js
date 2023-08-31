const roomdetaildao = require('../models/roomdetail.dao');

const detailroom = async (roomId) => {
   const detail = await roomdetaildao.getDetail(roomId)
    return detail;
}

const roomreview = async (roomId) => {
   const review = await roomdetaildao.roomreview(roomId)
    return review;
}

const createreviews = async (user_id, room_id, content, ratings) => {
  const  create = await roomdetaildao.createreviews(user_id, room_id, content, ratings);
  console.log(room_id);
    return create;
};

module.exports = { detailroom, roomreview, createreviews };