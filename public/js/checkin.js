/* eslint-disable */
$(document).ready(() => {
  //follow login.js and assign variables to match the form in checkin handlebars

  $("#checkin-button").on("click", (event) => {
    event.preventDefault();
    let userId = localStorage.getItem("id");

    // Send the POST request.
    $.post("/api/checkin", {
      UserId: userId,
    })
      .then((data) => {
   

        //need login to disable check in button until date changed
        // maybe display a handlebars that says "You've checked in your habit for today"
      })
      .catch((err) => {
        console.log(err);
      });
  });

  $("sendTest").on("click",  (event)=> {
    event.preventDefault();
    $.post("/api/checkin-email", {
      email
    })
})

});
