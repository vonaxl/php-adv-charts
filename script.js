// function printChartJsFatturato(data) {
// var ctx = document.getElementById(id).getContext("2d");
//   var ctx = $("#fatturato");
//   new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: moment.months(),
//       datasets: [
//         {
//           label: "vendite",
//           data: data
//         }
//       ]
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true
//             }
//           }
//         ]
//       }
//     }
//   });
// }
function printGraphs(id, type, labels, label, data, bgColor, borderColor) {
  var ctx = document.getElementById(id).getContext("2d");
  new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: 1
        }
      ]
    }
  });
}
function printline(
  id,
  type,
  labels,
  data1,
  data2,
  data3,
  bgColor,
  borderColor1,
  borderColor2,
  borderColor3
) {
  var ctx = document.getElementById(id).getContext("2d");
  new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: "Team1",
          data: data1,
          backgroundColor: bgColor,
          borderColor: borderColor1,
          borderWidth: 1
        },
        {
          label: "Team2",
          data: data2,
          backgroundColor: bgColor,
          borderColor: borderColor2,
          borderWidth: 1
        },
        {
          label: "Team3",
          data: data3,
          backgroundColor: bgColor,
          borderColor: borderColor3,
          borderWidth: 1
        }
      ]
    }
  });
}
// function getData() {
//   $.ajax({
//     url: "getLineData.php",
//     method: "GET",
//     success: function(data) {
//       printChartJsFatturato(data);
//     },
//     error: function(error) {
//       console.log("error", error);
//     }
//   });
// }
function printCheck(data) {
  printGraphs(
    "fatturato",
    data["fatturato"]["type"],
    moment.months(),
    "vendita",
    Object.values(data["fatturato"]["data"]),
    "green",
    "red"
  );
  printGraphs(
    "fatturato_by_agent",
    data["fatturato_by_agent"]["type"],
    Object.keys(data["fatturato_by_agent"]["data"]),
    "",
    Object.values(data["fatturato_by_agent"]["data"]),
    "yellow",
    "red"
  );
  printline(
    "team_efficiency",
    data["team_efficiency"]["type"],
    moment.months(),
    Object.values(data["team_efficiency"]["data"]["Team1"]),
    Object.values(data["team_efficiency"]["data"]["Team2"]),
    Object.values(data["team_efficiency"]["data"]["Team3"]),
    "",
    "blue",
    "green",
    "orange"
  );
}
function getData2() {
  $.ajax({
    url: "getGraphsData.php",
    method: "GET",
    success: function(data) {
      printCheck(data);
      console.log(Object.values(data["team_efficiency"]["data"]));
    },
    error: function(error) {
      console.log("error", error);
    }
  });
}

function init() {
  // getData();
  getData2(); //lo so che potevo fare soltanto un getdata richiamando l'altra funzione dentro success ma volevo far vedere l'altro passaggio
}

$(document).ready(init);
