const express = require("express");
require("dotenv/config");
const cors = require("cors");
const mongoose = require("mongoose");

const searchedRouter = require("./routes/searchedRouter");
const clickedRouter = require("./routes/clickedRouter");

const app = express();
const port = 4000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));

app.use("/searched", searchedRouter);
app.use("/clickedUrl", clickedRouter);

app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
});
