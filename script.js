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
  var mychart = new Chart(ctx, {
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
// function printCheck(data) {
//   printGraphs(
//     "fatturato",
//     data["fatturato"]["type"],
//     moment.months(),
//     "vendita",
//     Object.values(data["fatturato"]["data"]),
//     "green",
//     "red"
//   );
//   printGraphs(
//     "fatturato_by_agent",
//     data["fatturato_by_agent"]["type"],
//     Object.keys(data["fatturato_by_agent"]["data"]),
//     "",
//     Object.values(data["fatturato_by_agent"]["data"]),
//     "yellow",
//     "red"
//   );
//   printline(
//     "team_efficiency",
//     data["team_efficiency"]["type"],
//     moment.months(),
//     Object.values(data["team_efficiency"]["data"]["Team1"]),
//     Object.values(data["team_efficiency"]["data"]["Team2"]),
//     Object.values(data["team_efficiency"]["data"]["Team3"]),
//     "",
//     "blue",
//     "green",
//     "orange"
//   );
// }
function print(data) {
  // $("canvas").css("");
  if (data[0]["access"] === "guest") {
    printGraphs(
      "fatturato",
      data[0]["type"],
      moment.months(),
      "vendita",
      Object.values(data[0]["data"]),
      "green",
      "red"
    );
    if (data[1]["access"] === "employee") {
      printGraphs(
        "fatturato_by_agent",
        data[1]["type"],
        Object.keys(data[1]["data"]),
        "",
        Object.values(data[1]["data"]),
        "yellow",
        "red"
      );
      if (data[2]["access"] === "clevel") {
        printline(
          "team_efficiency",
          data[2]["type"],
          moment.months(),
          Object.values(data[2]["data"]["Team1"]),
          Object.values(data[2]["data"]["Team2"]),
          Object.values(data[2]["data"]["Team3"]),
          "",
          "blue",
          "green",
          "orange"
        );
      } //end clevel condition
    } //end employee condtion
  } //end guest condition
} //end print function
function getData2(elem) {
  $.ajax({
    url: "getGraphsData.php",
    data: {
      access: elem
    },
    method: "GET",
    success: function(data) {
      print(data);
      console.log(data);
    },
    error: function(error) {
      console.log("error", error);
    }
  });
}
function cercaBtnClick() {
  var input = $("#access").val();
  console.log(input);
  getData2(input);
  $("#access").val("");
}
function init() {
  // getData();
  // getData2(); //lo so che potevo fare soltanto un getdata richiamando l'altra funzione dentro success ma volevo far vedere l'altro passaggio
  $("#cerca").on("click", cercaBtnClick);
}

$(document).ready(init);
