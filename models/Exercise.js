const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
    required: "Please enter name of exercise.",
    lowercase: true
  },
  duration: {
    type: Number,
    required: "Please enter duration." 
  },
  weight: {
    type: Number,
    max: 1000
  },
  reps: {
    type: Number,
    max: 1000
  },
  sets: {
    type: Number,
    max: 1000
  },
  distance: {
    type: Number,
    max: 1000
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
