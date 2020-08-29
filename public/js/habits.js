/* eslint-disable */
$(document).ready(() => {
    $(".habit").on("click", function () {
        console.log("habit clicked");
        const id = $(this).data("id");
        $.ajax("/api/user/habit", {
            method: "PUT",
            data: { habitId: id },
        }).then(() => {
            console.log("put habit");
            // Reload the page to get the updated list
            window.location.replace("/checkin");
        });
    });
});