const express = require("express");
const Whishlist = require("../model/whishlist");
const router = express.Router();

router.post("/", async function (req, res) {
  const { bookId, title, img, author, rating } = req.body;

  let addWhishlist = new Whishlist({
    bookId,
    title,
    img,
    author,
    rating,
  });

  addWhishlist = await addWhishlist.save();

  if (addWhishlist) {
    return res.status(200).json(addWhishlist);
  } else {
    return res.status(500).json("cannot add to whishlist!");
  }
});

router.get("/", async function (req, res) {
  const whislistList = await Whishlist.find();

  if (whislistList) {
    return res.status(200).json(whislistList);
  } else {
    return res.status(500).json("whishlist is empty!");
  }
});

router.get("/:bookId", async function (req, res) {
  const { bookId } = req.params;
  const getWhishlist = await Whishlist.findOne({ bookId });

  if (getWhishlist) {
    return res.status(200).json(getWhishlist);
  } else {
    return res.status(404).json("whishlist not found!");
  }
});

router.delete("/:bookId", async function (req, res) {
  const { bookId } = req.params;
  const deleteWhishlist = await Whishlist.findOneAndDelete({ bookId });
  //   const deleteWhishlist = await Whishlist.findByIdAndDelete(bookId);

  if (deleteWhishlist) {
    return res.status(200).json("succes remove from whishlist");
  } else {
    return res.status(404).json("whishlist not found!");
  }
});

module.exports = router;
