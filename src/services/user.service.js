const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error("you are not user!");
    err.statusCode = 404;
    throw err;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error("Wrong Password");
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
};

module.exports = { signIn };
