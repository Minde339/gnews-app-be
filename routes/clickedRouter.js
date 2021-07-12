const express = require("express");
const clickedController = require("../controllers/clickedController");

const router = express.Router();

router.route("/").post(clickedController.createClicked);

module.exports = router;
