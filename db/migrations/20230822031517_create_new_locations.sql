-- migrate:up
CREATE TABLE locations (
  id int PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);

ALTER TABLE locations ADD FOREIGN KEY (id) REFERENCES rooms (location_id);

-- migrate:down

DROP TABLE locations;