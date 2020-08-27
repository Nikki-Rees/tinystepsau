const db = require("../models");

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

    // POST route for saving a new todo
    app.post("/api/habit", (req, res) => {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Habit.create({
            userId: req.user.id,
            name: req.body.name,
            description: req.body.description,
            frequency: req.body.frequency

        }).then((dbHabit) => {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbHabit);
        });
    });

    // GET route for getting all of the checkin options NOTE for use within public js file > $.ajax("/api/checkins")
    app.get("/api/checkins", async (req, res) => {
        const checkins = await db.Checkin.findAll({ where: { userId: req.user.id } });
        res.json(checkins);
    });

    // POST route for saving a new todo
    app.post("/api/checkin", (req, res) => {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Checkin.create({

            userId: req.user.id,
            date: req.body.date,


        }).then((dbCheckin) => {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbCheckin);
        });
    });
    // update
    app.put("/api/user/habit", async (req, res) => {

        const user = await db.User.findOne({ where: { id: req.user.id } });
        user.update({ habitId: req.body.habitId });
        res.json(user);
        //$.ajax("/api/user/habit", {method:"PUT", data:{habitId:"~addbuttonidname~"}})
    });
};