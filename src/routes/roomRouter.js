const express = require("express");

const { getRoomList } = require("../controllers/roomController");

const router = express.Router();

router.get("", getRoomList);

module.exports = router;
