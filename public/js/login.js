$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (userData.email && userData.password) {
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData);
      emailInput.val("");
      passwordInput.val("");
    }
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the /checkin page
  function loginUser(userData) {
    $.post("/api/login", {
      email: userData.email,
      password: userData.password
    })
      .then(data => {
        localStorage.setItem("id", data.id);
        localStorage.setItem("userEmail", data.email)
        window.location.replace("/checkin");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
