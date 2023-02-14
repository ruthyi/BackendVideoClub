const router = require("express").Router();
const Movie = require("../models/todo");
const Rating = require("../models/rating");

router.get("/movies", (req, res) => {
  Movie.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});
router.get("/rating", (req, res) => {
  Rating.find((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.post("/newMovies", (req, res) => {
  Movie.create(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.post("/newRating", (req, res) => {
  Rating.create(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.delete("/removeMovies", (req, res) => {
  Movie.findOneAndRemove({ _id: req.body.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end(result);
  });
});

router.delete("/removeRating", (req, res) => {
  Rating.findOneAndRemove({ _id: req.body.id }, (err, result) => {
    if (err) throw new Error(err);
    res.end(result);
  });
});

router.put("/movies/:id", (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
if(err) throw new Error(err);
res.json(result);
});
});

router.put("/rating/:id", (req, res) => {
  Rating.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
if(err) throw new Error(err);
res.json(result);
});
});


  module.exports = router;






