

const romdetaildao = require('../models/romdetail.dao');


const detailrom = async () => {
    const detail = await romdetaildao.getDetail()
    return detail;
}

    const romreview = async () => {
        const review = await romdetaildao.romreview()
        return review;
    }

    const createreviews = async(user_id,room_id,content,ratings) =>{
        await romdetaildao.createreviews(user_id,room_id,content,ratings);

        };






module.exports = { detailrom,romreview,createreviews};