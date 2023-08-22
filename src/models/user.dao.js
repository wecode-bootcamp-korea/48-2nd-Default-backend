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

module.exports = { getUserByEmail };
