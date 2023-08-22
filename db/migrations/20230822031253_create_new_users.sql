-- migrate:up
CREATE TABLE users (
  id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(200) NOT NULL,
  profile_image varchar(150) DEFAULT "default url",
  is_host boolean DEFAULT (false),
  point int DEFAULT 0,
  created_at timestamp NOT NULL DEFAULT (now()),
  updated_at timestamp DEFAULT (on update())
);

-- migrate:down

DROP TABLE users;
