/* eslint-disable */
//follow login.js and assign variables to match the form in checkin handlebars
$("#checkin-button").click((event) => {
  event.preventDefault();
  let userId = localStorage.getItem("id");
  let userEmail = localStorage.getItem("userEmail");
  // Send the POST request.
  console.log(userEmail);
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
    
  $.post("/api/checkin-email", {
    email: userEmail,
  }).then(() => {
    console.log(userEmail);

  }).catch((err) => {
    console.log(err)
  });

});
