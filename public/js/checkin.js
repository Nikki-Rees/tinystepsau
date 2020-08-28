/* eslint-disable */
$(".checkinButton").on("click", (event) => {
  event.preventDefault();
        
  // Send the POST request.
  $.ajax("/api/checkins", {
    method: "POST",
    data: { date: Date.now() }
  }).then(
    () => {
      console.log("User has checked in");
      // Reload the page 
      location.reload();
      //disable check in button until date changed
    }
  );
});

