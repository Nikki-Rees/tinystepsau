/* eslint-disable */
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Done', 'Not Done'],
        datasets: [{
            label: '# of Votes',
            data: [10, 5],
            backgroundColor: [
                'rgba(0, 255, 0, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
        }]
    }
});