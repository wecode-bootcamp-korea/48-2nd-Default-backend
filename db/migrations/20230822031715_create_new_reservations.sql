-- migrate:up
CREATE TABLE reservations (
  id int PRIMARY KEY NOT NULL,
  user_id int NOT NULL,
  room_id int NOT NULL,
  first_date datefield NOT NULL,
  last_date datefield NOT NULL,
  created_at timestamp NOT NULL DEFAULT (now())
);

ALTER TABLE reservations ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE reservations ADD FOREIGN KEY (room_id) REFERENCES rooms (id);


-- migrate:down

DROP TABLE reservations;
