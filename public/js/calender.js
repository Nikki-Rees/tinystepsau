
  google.charts.load("current", {packages:["calendar"]});
  google.charts.setOnLoadCallback(drawChart);

function drawChart() {
   const dataTable = new google.visualization.DataTable();
   dataTable.addColumn({ type: 'date', id: 'Date' });
   dataTable.addColumn({ type: 'number', id: 'CheckedIn' });
   dataTable.addRows([
      [ new Date(2012, 3, 13), 37032 ],
      [ new Date(2012, 3, 14), 38024 ],
      [ new Date(2012, 3, 15), 38024 ],
      [ new Date(2012, 3, 16), 38108 ],
      [ new Date(2012, 3, 17), 38229 ],
      // Many rows omitted for brevity.
      [ new Date(2013, 9, 4), 38177 ],
      [ new Date(2013, 9, 5), 38705 ],
      [ new Date(2013, 9, 12), 38210 ],
      [ new Date(2013, 9, 13), 38029 ],
      [ new Date(2013, 9, 19), 38823 ],
      [ new Date(2013, 9, 23), 38345 ],
      [ new Date(2013, 9, 24), 38436 ],
      [ new Date(2013, 9, 30), 38447 ]
    ]);

   const chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

  const options = {
     title: "Progress",
     height: 350,
     noDataPattern: {
       backgroundColor: '#76a7fa',
       color: '#a0c3ff'
     }
   };
   };

   chart.draw(dataTable, options);
};
