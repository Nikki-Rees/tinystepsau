//follow login.js and assign variables to match the form in checkin handlebars
$("#checkin-button").click(event => {
  event.preventDefault();
  const userId = localStorage.getItem("id");
  Swal.fire({
    title: "Loading",
    showCancelButton: false,
    showConfirmButton: false,
    buttonsStyling: true,
    // html: "<pre><code>" + "You checked o" + "</code></pre>",
    onBeforeOpen() {
      Swal.showLoading();
    }
  }).then(result => {
    if (result.value) {
      //confirm
      return;
    }
  });
  // Send the POST request.
  $.post("/api/checkin", {
    UserId: userId
  })
    .then(() => {
      Swal.close();
      Swal.fire({
        title: "You checked in your habit today!",
        type: "success",
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "Okay",
        confirmButtonClass: "success",
        buttonsStyling: true
        //  timer: 1500,
        //  html: "<pre><code>" + info + "</code></pre>",
      }).then(result => {
        if (result.value) {
          location.reload();
          return;
        }
        if (result.dismiss === Swal.DismissReason.cancel) {
          location.reload();
          return;
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
});
