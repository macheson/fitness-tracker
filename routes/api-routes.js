var db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {

        db.Workout.create(req.body, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.send(data);
                console.log(data);
            }
        });
    });

    app.put("/api/workouts/:id", (req, res) => {

        console.log(req.body);
        console.log(req.params.id);

        db.Exercise.create(req.body)
            .then(({ _id }) => db.Workout.findOneAndUpdate({ _id: req.params.id }, { 
                $push: { exercises: _id },
                $inc: { totalDuration: req.body.duration }
             }, { new: true }))
            .then(dbWorkout => {
                console.log(dbWorkout);
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

}