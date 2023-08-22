-- migrate:up
CREATE TABLE room_likes (
  id int PRIMARY KEY NOT NULL,
  user_id int,
  room_id int,
  like_list_id int,
  created_at timestamp NOT NULL DEFAULT (now())
);

ALTER TABLE room_likes ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE room_likes ADD FOREIGN KEY (room_id) REFERENCES rooms (id);

-- migrate:down

DROP TABLE room_likes;