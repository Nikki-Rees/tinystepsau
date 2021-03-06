// Page loading animation
$(window).on("load", () => {
  if ($(".cover").length) {
    $(".cover").parallax({
      imageSrc: $(".cover").data("image"),
      zIndex: "1"
    });
  }

  $("#preloader").animate(
    {
      opacity: "0"
    },
    600,
    () => {
      setTimeout(() => {
        $("#preloader")
          .css("visibility", "hidden")
          .fadeOut();
      }, 300);
    }
  );
});

// Nav bar scrolling animation
$(window).scroll(() => {
  const logoColourState = $("#logo").attr("src");
  if (
    $(window).scrollTop() >= 1 &&
    logoColourState === "assets/images/tiny-steps-black.png"
  ) {
    $("nav").addClass("background-header");
    $("#logo").attr("src", "assets/images/tiny-steps-black.png");
  } else {
    $("nav").removeClass("background-header");
    $("#logo").attr("src", "assets/images/tiny-steps-black.png");
  }
});
