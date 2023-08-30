const { AppDataSource } = require("./data-source");

    
const getDetail =async () => {
    return await AppDataSource.query(
        `
        SELECT
        a.id,
        a.title,
        a.room_description,
        a.thumb_nail,
        b.guests_count,
        b.bedrooms_count,
        b.beds_count,
        b.wifi_boolean,
        b.air_conditioning_count,
        b.amenities,
        (
            SELECT JSON_ARRAYAGG(image_url)
            FROM images
            WHERE room_id = a.id
        ) AS image_url,
        d.name,
        E.name,
        E.profile_image
    FROM
        rooms A
        LEFT JOIN room_amenities B ON a.id = b.room_id
        LEFT JOIN categories D ON a.category_id = d.id
        LEFT JOIN users E on a.user_id = E.id
   WHERE a.id = 2;
   
     `,
    );

};



const romreview = async() => {
return await AppDataSource.query(
    `
    SELECT a.room_id, c.name, c.profile_image, a.content, a.ratings, a.created_at
	FROM room_reviews a
	LEFT JOIN rooms b ON a.room_id = b.id
	LEFT JOIN users c ON a.user_id = c.id
    WHERE a.room_id=?
	ORDER BY a.created_at DESC;
    `,
);
};



const createreviews = async() => {
    await AppDataSource.query(
        `
         insert into room_reviews
         (user_id,room_id,content,ratings)
	     VALUES(?,?,"?",?)
        
        ` ,


    );
};








module.exports = {  getDetail,romreview , createreviews};