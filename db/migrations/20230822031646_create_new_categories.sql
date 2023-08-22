-- migrate:up
CREATE TABLE categories (
  id int PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  image_icon varchar(255) NOT NULL
);

ALTER TABLE categories ADD FOREIGN KEY (id) REFERENCES rooms (category_id);

-- migrate:down

DROP TABLE categories;