var hourly_dataset = ['750', '1250', '1000', '1500', '2000', '1750', '1250', '1750', '2250', '1750', '2250'];
var daily_dataset = ['0', '1000', '1500', '1750', '1250', '1000', '2250', '2500', '2570'];
var weekly_dataset = ['0', '1250', '1500', '1750', '1250', '1750', '2250', '1750', '2250'];
var monthly_dataset = ['0', '1250', '1500', '1750', '1250', '1750', '2250', '1750', '2250'];
var labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-7", "18-24", "25-31",];

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            // label: false,
            data: hourly_dataset,
            backgroundColor: [
                'rgba(174, 166, 244, 0.42)'
            ],
            borderColor: [
                'rgba(174, 166, 244, 1)'
            ],
            borderWidth: 2,
            pointRadius: 7,
            pointBackgroundColor: "white",
            pointBorderWidth: 3,
            pointBorderColor: "#7c65f2"
        }]
    },
    options: {
      title: {
            display: false,
            position: "top",
            text: 'TRAFFIC'
        },
        legend: {
          display: false
        },
        ticks: 10,
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  }
});

// var daily_chart = new Chart(ctx);
// $("#chart2").click(function() {
//     var data = daily_chart.config.data;
//     data.datasets[0].data = daily_dataset;
//     data.datasets[1].data = daily_dataset;
//     data.labels = chart_labels;
//     daily_chart.update();
// });

var ctxLeft = document.getElementById('myChartLeft').getContext('2d');
var chartLeft = new Chart(ctxLeft, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            backgroundColor: 'rgba(143, 131, 245, 1)',
            // borderColor: 'rgba(174, 166, 244, 1)',
            data: [75, 100, 175, 125, 220, 200, 100],
        }]
    },

    options: {
      layout: {
            padding: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 40
            }
        },
      title: {
            display: false,
            position: "top",
            text: 'DAILY TRAFFIC'
        },
        legend: {
          display: false
        },
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false,
                    autoSkip: true,

                   }
            }]
        }
    }
  }
});


var ctxRight = document.getElementById('myChartRight').getContext('2d');
var chartRight = new Chart(ctxRight, {

    type: 'doughnut',


    data: {
        labels: ["Phones", "Tablets", "Desktops"],
        datasets: [{
            // label: "My First dataset",
            backgroundColor: ['rgb(142, 237, 220)',
             'rgb(100, 105, 227)',
             'rgb(163, 109, 200)'],
            data: [30, 25, 45],
        }]
    },

    options: {
      layout: {
            padding: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 40
            }
        },
      title: {
            display: false,
            position: "top",
            text: 'MOBILE USERS'
        },
      legend: {
        position: "right"
      },
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
  }
});
