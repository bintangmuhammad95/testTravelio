require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const whishlistRouter = require("./route/whishlist");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = 8000;

app.use(`/`, whishlistRouter);

mongoose
  .connect(process.env.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen( port, () => {
  console.log(`app listening on port ${port}`);
});
