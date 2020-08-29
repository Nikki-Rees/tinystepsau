/* eslint-disable */
$(document).ready(() => {
  //follow login.js and assign variables to match the form in checkin handlebars

  $("#checkin-button").on("click", (event) => {
    event.preventDefault();
    
    // Send the POST request.
    $.ajax("/api/checkins", {
      method: "POST",
      data: { date: Date.now() },
    }).then(() => {
      console.log("User has checked in");
      
      //need login to disable check in button until date changed
      // maybe display a handlebars that says "You've checked in your habit for today"
    });
  });
});
