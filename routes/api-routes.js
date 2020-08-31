/* eslint-disable */
const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const mailer = require("./email")

// Routes
// =============================================================
module.exports = (app) => {

  app.post("/api/create-habit", (req, res) => {
      let newHabit = req.body.habit
      db.Habit.create({
        type: newHabit.type,
        activity: newHabit.activity,
        description: newHabit.description,
        frequency: newHabit.frequency,
      }).then((dbHabit) => {
        res.json(dbHabit);
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
        UserId: req.body.UserId,
      }).then((data) => {
        mailer(req.user.email);
        res.json({success: true, data: data});
      });
    });
    
    // update
    app.post("/api/user/habit", async (req, res) => {
      const user = await db.User.findOne({ where: { id: req.user.id } });
      user.update({ HabitId: req.body.HabitId });
      res.json(user);
    });
  
  
};