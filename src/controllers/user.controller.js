const userService = require("../services/user.service");
const { catchAsync } = require("../utilities/errorHandle");

const signUp = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  await userService.signUp(name, email, password);

  res.status(201).json("User created");
});
module.exports = { signUp };
