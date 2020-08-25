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


        // POST route for saving a new todo
        app.post("/api/habits", (req, res) => {
            console.log(req.body);
            // create takes an argument of an object describing the item we want to
            // insert into our table. In this case we just we pass in an object with a text
            // and complete property (req.body)
            db.Todo.create({
                text: req.body.text,
                complete: req.body.complete
            }).then((dbTodo) => {
                // We have access to the new todo as an argument inside of the callback function
                res.json(dbTodo);
            });
        });
