const mongoose = require("mongoose");

const searchedSchema = new mongoose.Schema({
  searchedValue: String,
});

const searchedValue = mongoose.model("searchedValue", searchedSchema);

module.exports = searchedValue;
