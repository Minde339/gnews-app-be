const express = require("express");
const searchedController = require("../controllers/searchedController");

const router = express.Router();

router.route("/").post(searchedController.createSearched);

module.exports = router;
