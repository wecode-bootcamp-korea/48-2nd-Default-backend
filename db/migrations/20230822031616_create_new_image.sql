-- migrate:up
CREATE TABLE images (
  id int PRIMARY KEY NOT NULL,
  room_id int,
  image_url varchar(255) NOT NULL
);

ALTER TABLE images ADD FOREIGN KEY (room_id) REFERENCES rooms (id);

-- migrate:down

DROP TABLE images;
