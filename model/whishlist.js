const mongoose = require("mongoose");
// const { Schema } = mongoose;

const whishlistSchema = mongoose.Schema({
  bookId: {
    type: String,
  },
  title: { type: String },
  img: { type: String },
  author: { type: Array },
  rating: { type: Number },
});

module.exports = mongoose.model("Whishlist", whishlistSchema);
