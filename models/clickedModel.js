const mongoose = require("mongoose");

const clickedSchema = new mongoose.Schema({
  clickedUrl: String,
});

const clickedUrl = mongoose.model("clickedUrl", clickedSchema);

module.exports = clickedUrl;
