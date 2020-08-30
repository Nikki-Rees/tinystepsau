/* eslint-disable */
const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = (app) => {

    // GET route for getting all of the habit options
    app.get("/api/habits", (req, res) => {
        const query = {};
        if (req.query.habit_id) {
            query.HabitId = req.query.habit_id;
        }
    });

    app.post("/api/create-habit", (req, res) => {
      db.Habit.create({
        type: req.body.type,
        activity: req.body.activity,
        description: req.body.description,
        frequency: req.body.frequency,
      }).then((dbHabit) => {
        console.log(dbHabit);
        res.redirect("/checkin");
      });
    });

    // GET route for getting all of the checkin options NOTE for use within public js file > $.ajax("/api/checkins")
    //for our google chart and calendar
    app.get("/api/checkins", async (req, res) => {
        const checkins = await db.Checkin.findAll({ where: { UserId: req.user.id } });
        res.json(checkins);
    });

    app.post("/api/checkin", isAuthenticated, (req, res) => {
      
      db.Checkin.create({
        UserId: userId,
        test: "this is a test",
      }).then((data) => {
        res.json({success: true, data: data});
        // res.redirect("/checkin");
      });
    });

    
    // update
    //*
    app.put("/api/user/habit", async (req, res) => {
        const user = await db.User.findOne({ where: { id: req.user.id } });
        user.update({ HabitId: req.body.habitId });
        res.json(user);
        //$.ajax("/api/user/habit", {method:"PUT", data:{habitId:"~addbuttonidname~"}})
    });

    
};