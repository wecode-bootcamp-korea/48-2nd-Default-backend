-- migrate:up
CREATE TABLE room_amenities (
  id int PRIMARY KEY NOT NULL,
  room_id int,
  guests_count int,
  bedrooms_count int,
  beds_count int,
  baths_count int,
  wifi_boolean boolean,
  tv_count int,
  air_conditioning_count int,
  amenities int
);

ALTER TABLE room_amenities ADD FOREIGN KEY (room_id) REFERENCES rooms (id);


-- migrate:down

DROP TABLE room_amenities;