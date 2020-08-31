/* eslint-disable */
var ctx = document.getElementById("myChart");

$.get("/api/checkins").then((response) => {  
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Done", "Not Done"],
      datasets: [
        {
          label: "Successful checkins",
          data: [response.length, 90 - response.length],
          backgroundColor: ["rgba(0, 255, 0, 0.2)", "rgba(255, 99, 132, 0.2)"],
        },
      ],
    },
  });
});
