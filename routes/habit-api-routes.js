const db = require("../models");

// Routes
// =============================================================
module.exports = (app) => {

    // GET route for getting all of the posts
    app.get("/api/habits", (req, res) => {
        const query = {};
        if (req.query.habit_id) {
            query.HabitId = req.query.habit_id;
        }