-- migrate:up
ALTER TABLE rooms MODIFY title NOT NULL;
ALTER TABLE rooms MODIFY user_id NOT NULL;
ALTER TABLE rooms MODIFY location_id NOT NULL;
ALTER TABLE images MODIFY room_id NOT NULL;
ALTER TABLE room_amenities MODIFY room_id NOT NULL;
ALTER TABLE room_amenities MODIFY guests_count DEFAULT(1) NOT NULL;
ALTER TABLE room_amenities MODIFY bedrooms_count DEFAULT(1) NOT NULL;
ALTER TABLE room_amenities MODIFY baths_count DEFAULT(1) NOT NULL;
ALTER TABLE room_amenities MODIFY wifi_boolean DEFAULT(false) NOT NULL;
ALTER TABLE room_amenities MODIFY tv_count DEFAULT(1) NOT NULL;
ALTER TABLE room_amenities MODIFY air_conditioning_count DEFAULT(1) NOT NULL;
ALTER TABLE room_amenities MODIFY amenities DEFAULT(1) NOT NULL;
ALTER TABLE room_likes MODIFY user_id NOT NULL;
ALTER TABLE room_likes MODIFY room_id NOT NULL;
ALTER TABLE room_likes MODIFY like_list_id NOT NULL;

-- migrate:down
ALTER TABLE rooms MODIFY title 