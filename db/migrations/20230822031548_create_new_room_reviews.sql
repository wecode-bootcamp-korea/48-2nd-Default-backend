-- migrate:up
CREATE TABLE room_reviews (
  id int PRIMARY KEY NOT NULL,
  room_id int NOT NULL,
  user_id int NOT NULL,
  content varchar(500) NOT NULL,
  ratings float DEFAULT 0,
  created_at timestamp NOT NULL DEFAULT (now())
);

ALTER TABLE room_reviews ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE room_reviews ADD FOREIGN KEY (room_id) REFERENCES rooms (id);

-- migrate:down

DROP TABLE room_reviews;