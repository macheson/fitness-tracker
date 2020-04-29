const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ],
  totalDuration: {
    type: Number, 
    default: 0
  },
  lastUpdated: Date,
});

WorkoutSchema.methods.lastUpdatedDate = function () {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
}

WorkoutSchema.methods.calculateDuration = function () {
  this.totalDuration = exercise.duration
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
