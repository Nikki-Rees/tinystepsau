/* eslint-disable */
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const nodemailer = require("nodemailer");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("./../models");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/habits", (req, res) => {
    db.Habit.findAll()
      .then((habits) => {
        habits = habits.map((habit) => {
          return habit.dataValues;
        });

        res.render("habits", { habits });
      })
      .catch((err) => console.log(err));
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/checkin");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the checkin page
    if (req.user) {
      res.redirect("/checkin");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });


  app.get("/checkin", isAuthenticated, (req, res) => {
    // console.log(req)
    db.Habit.findOne({ where: { id: req.user.HabitId } })
      .then((habit) => {
        // console.log("HEY I'M TRIGGERING")
        res.render("checkin", { habit: habit.dataValues });
        // res.redirect("/checkin");
      });

  });
};

