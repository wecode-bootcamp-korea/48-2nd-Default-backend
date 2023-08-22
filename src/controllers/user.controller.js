const userService = require("../services/user.service");
const { catchAsync } = require("../utilities/errorHandle");

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const accessToken = await userService.signIn(email, password);

  res.status(200).json({ accessToken: accessToken });
});

module.exports = { signIn };
