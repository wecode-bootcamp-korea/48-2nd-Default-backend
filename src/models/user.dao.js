const { AppDataSource } = require("./data-source");

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
      SELECT id, name, email, password
      FROM users
      WHERE email = ?
    `,
    [email]
  );

  return user;
};

const createUser = async (name, email, password) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      name,
      email,
      password
    ) VALUES (
      ?,
      ?,
      ?
    );
    `,
    [name, email, password]
  );
};

module.exports = { getUserByEmail, createUser };
