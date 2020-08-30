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
        res.json({success: true, data: data});
        // res.redirect("/checkin");
      });
    });

  app.post("/api/checkin-email", (req, res) => {
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
  });
    
    // update
    //*
    app.post("/api/user/habit", async (req, res) => {
        const user = await db.User.findOne({ where: { id: req.user.id } });
        user.update({ HabitId: req.body.HabitId });
        res.json(user);
    
        //$.ajax("/api/user/habit", {method:"PUT", data:{habitId:"~addbuttonidname~"}})
    });

};