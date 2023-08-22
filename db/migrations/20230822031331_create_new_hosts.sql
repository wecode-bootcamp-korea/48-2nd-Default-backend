-- migrate:up
CREATE TABLE hosts (
  id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id integer NOT NULL
);

ALTER TABLE hosts ADD FOREIGN KEY (user_id) REFERENCES users (id);

-- migrate:down

DROP TABLE hosts;