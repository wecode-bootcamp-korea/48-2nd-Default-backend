-- migrate:up
CREATE TABLE like_lists (
  id int PRIMARY KEY NOT NULL,
  title varchar(255) NOT NULL
);

ALTER TABLE like_lists ADD FOREIGN KEY (id) REFERENCES room_likes (like_list_id);

-- migrate:down

DROP TABLE like_lists;
