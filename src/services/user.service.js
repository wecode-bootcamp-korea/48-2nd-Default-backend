const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");
const { validateEmail } = require("../utilities/validator");

const signUp = async (name, email, password) => {
  validateEmail(email);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("duplicated email");
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createUser(name, email, hashedPassword);
};

module.exports = { signUp };
