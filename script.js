function printChartJsFatturato(data) {
  var ctx = document.getElementById("fatturato").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: moment.months(),
      datasets: [
        {
          label: "vendite",
          data: data
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}
function fatturato_by_agent(type, label, data) {
  var ctx = document.getElementById("fatturato_by_agent").getContext("2d");
  new Chart(ctx, {
    type: type,
    data: {
      labels: label,
      datasets: [
        {
          label: "Agents",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 32, 192, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)"
          ],
          borderWidth: 1
        }
      ]
    }
  });
}

function getData() {
  $.ajax({
    url: "getLineData.php",
    method: "GET",
    success: function(data) {
      printChartJsFatturato(data);
    },
    error: function(error) {
      console.log("error", error);
    }
  });
}
function getData2() {
  $.ajax({
    url: "getGraphsData.php",
    method: "GET",
    success: function(data) {
      fatturato_by_agent(
        data["fatturato_by_agent"]["type"],
        Object.keys(data["fatturato_by_agent"]["data"]),
        Object.values(data["fatturato_by_agent"]["data"])
      );
    },
    error: function(error) {
      console.log("error", error);
    }
  });
}

function init() {
  getData();
  getData2(); //lo so che potevo fare soltanto un getdata richiamando l'altra funzione dentro success ma volevo far vedere l'altro passaggio
}

$(document).ready(init);
