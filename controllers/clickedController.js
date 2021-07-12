const Clicked = require("./../models/clickedModel");

exports.createClicked = async (req, res) => {
  try {
    console.log(req.body);
    const newClick = new Clicked({
      clickedUrl: req.body.clickedUrlData,
    });
    const savedUrl = await newClick.save();
    res.status(201).json({
      status: "success",
      data: {
        savedUrl,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "fail",
    });
  }
};
