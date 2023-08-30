const express = require("express");
const { userRouter } = require("./user.router");
const { detailRouter } = require("./romdetail.routes");

const routes = express.Router();
routes.use("/user", userRouter);
routes.use("/detail",detailRouter);
      
module.exports = { routes };
