-- migrate:up
CREATE TABLE rooms (
  id integer PRIMARY KEY NOT NULL,
  title varchar(255),
  thumb_nail varchar(255) NOT NULL,
  desc text COMMENT 'description of the accomodation',
  user_id integer,
  location_id int,
  price int NOT NULL,
  category_id int NOT NULL,
  start_time timestamp,
  created_at timestamp NOT NULL DEFAULT (now()),
  updated_at timestamp DEFAULT (on update())
);

ALTER TABLE rooms ADD FOREIGN KEY (user_id) REFERENCES users (id);


-- migrate:down

DROP TABLE rooms;