// function drawChart() {
//    const dataTable = new google.visualization.DataTable();
//    dataTable.addColumn({ type: 'date', id: 'Date' });
//    dataTable.addColumn({ type: 'number', id: 'CheckedIn' });
//    dataTable.addRows([
//       [ new Date(2020, 9, 01), 37032 ],
//       [ new Date(2020, 9, 02), 37032 ],
//       [ new Date(2020, 9, 03), 37032 ],
//       [ new Date(2020, 9, 04), 37032 ],
//       [ new Date(2020, 9, 05), 37032 ],
//       [ new Date(2020, 9, 06), 37032 ],
//       [ new Date(2020, 9, 07), 37032 ],
//       [ new Date(2020, 9, 08), 37032 ],
//       [ new Date(2020, 9, 09), 37032 ],
//       [ new Date(2020, 9, 10), 37032 ],
//       [ new Date(2020, 9, 10), 37032 ],
//       [ new Date(2020, 9, 10), 37032 ],
//       [ new Date(2020, 9, 10), 37032 ],
//       [ new Date(2020, 9, 10), 37032 ],
//       [ new Date(2020, 9, 10), 37032 ],
//       [ new Date(2020, 9, 10), 37032 ],
//       [ new Date(2020, 9, 10), 37032 ],
//     ]);

//    const chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

//   const options = {
//      title: "Progress",
//      height: 350,
//      noDataPattern: {
//        backgroundColor: '#76a7fa',
//        color: '#a0c3ff'
//      }
//    };
//    };

//    chart.draw(dataTable, options);
// };

    const googleCharts = require("https://www.gstatic.com/charts/loader.js");
    const ajax = require("//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js");
   
    
    // Load the Visualization API and the piechart package.
    google.charts.load('current', {'packages':['calendar']});
      
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
      
    function drawChart() {
      const jsonData = $.ajax({
          url: "/api/checkins",
          dataType: "json",
          async: false
          }).responseText;
          
      // Create our data table out of JSON data loaded from server.
      const data = new google.visualization.DataTable(jsonData);

      // Instantiate and draw our chart, passing in some options.
      const chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));
      chart.draw(data, {width: 400, height: 240});
    };

