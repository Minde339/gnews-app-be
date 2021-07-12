const Searched = require("./../models/searchedModel");

exports.createSearched = async (req, res) => {
  try {
    console.log(req.body);
    const newSearch = new Searched({
      searchedValue: req.body.searchedValue,
    });
    const savedSearch = await newSearch.save();
    res.status(201).json({
      status: "success",
      data: {
        savedSearch,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "fail",
    });
  }
};
