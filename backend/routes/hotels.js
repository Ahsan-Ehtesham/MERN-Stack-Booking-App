const express = require("express");
const Hotel = require("../models/Hotel.js");
const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get
router.get("/:id", async (req, res) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GetAll
router.get("/", async (req, res) => {
    try {
      const getHotels = await Hotel.find();
      res.status(200).json(getHotels);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;