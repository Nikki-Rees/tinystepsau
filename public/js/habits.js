/* eslint-disable */
$(document).ready(() => {
    $(".habit").on("click", function () {
        const id = $(this).data("id");
        $.ajax("/api/user/habit", {
            method: "PUT",
            data: { habitId: id },
        }).then(() => {
            console.log("put habit");
            // Reload the page to get the updated list
            location.reload();
        });
    });

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

});