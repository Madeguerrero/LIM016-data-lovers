/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import data from "./data/ghibli/ghibli.js";

// haciendo una funcion con el dom
function renderCharts2() {
  const estaScore = document.querySelector("#myChart").getContext("2d");
  statisticsScore(estaScore);
}
renderCharts2();

/* ------------ estadisticas 1 ---------- */
function statisticsScore(estaScore) {
  new Chart(estaScore, {
    type: "bar",
    data: {
      labels: data.films.map((item) => item.title),
      datasets: [
        {
          label: "Score de 40-93",
          data: data.films.map((item) => item.rt_score),
          backgroundColor: [
            /*"rgba(255, 99, 132, 0.3)",
            "rgba(0, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.3)",
            "rgba(255, 206, 86, 0.3)",
            "rgba(75, 192, 192, 0.3)",
            "rgba(153, 102, 255, 0.3)",*/
            "rgba(255, 11, 51, 0.4)",
            "rgb(109, 70, 19, 0.4)",
          ],
          borderColor: [
            /*"rgba(255, 99, 132, 20)",
            "rgba(0, 99, 132, 1)",
            "rgba(54, 162, 235, 20)",
            "rgba(255, 206, 86, 20)",
            "rgba(75, 192, 192, 20)",
            "rgba(153, 102, 255, 20)",*/
            "rgba(255, 11, 51, 4)",
            "rgb(109, 70, 19, 4)",
          ],
          borderWidth: 3,
          hoverBorderWidth: 0,
        },
      ],
    },
    options: {
      indexAxis: "x",
      responsive: true,
      maintainAspecRatio: false,
    },
  });
}

// haciendo una funcion con el dom
function renderGender1() {
  const estaChart = document.querySelector("#myChart2").getContext("2d");
  estadisLanzamiento(estaChart);
}
renderGender1();

/* ------------ estadisticas 2 ---------- */
function estadisLanzamiento(estaChart) {
  new Chart(estaChart, {
    type: "line",
    data: {
      labels: data.films.map((item) => item.title),
      datasets: [
        {
          label: "Data Fecha ",
          data: data.films.map((item) => item.release_date),
          backgroundColor: [
            /* "rgba(75, 192, 192, 0.3)",
            "rgba(153, 102, 255, 0.3)",*/
            "rgb(231, 116, 0, 0.4)",
            "rgb(109, 70, 19, 0.4)",
          ],
          borderColor: [
            /*"rgba(75, 192, 192, 1)",*/ "rgb(231, 116, 0, 3",
            "rgb(109, 70, 19, 3)" /*"rgba(153, 102, 255, 1)"*/,
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspecRatio: false,
    },
  });
}

/*const estaScore = document.querySelector("#myChart").getContext("2d");
var score = data.films.rt_score;
var colors = [];
for (let i = 0; i < score.lenght; i++) {
  var color;

  switch (score[i]) {
    case 1:
      parseInt.score < 93;
      color = "rgba(255, 11, 51, 0.4)";
      break;

    case 2:
      parseInt.score > 94;
      color = "rgb(250, 241, 0, 0.4)";
      break;
  }
  color[i] = color;
}
function statisticsScore(estaScore) {
  new Chart(estaScore, {
    type: "bar",
    datasets: [
      {
        label: "Score de 40-93",
        data: score,
        backgroundColor: colors,
      },
    ],
  });
}*/

/*var estaScore = document.querySelector("#myChart").getContext("2d");
var score = data.films.rt_score;
var color;
switch (score[i]) {
    case 1:
      parseInt.score < 93;
      color = "rgba(255, 11, 51, 0.4)";
      break;

    case 2:
      parseInt.score > 94;
      color = "rgb(250, 241, 0, 0.4)";
      break;
  }
  color[i] = color;

var valorScore ={
    label: "Score de 40-93",
    data: parseInt.score < 93,
    backgroundColor: color,
    borderWidth: 0,
    yAxisID: "score-menor"

};

var valorScore2={
    label:"Score de 94-100",
    data:parseInt.score > 94,
    backgroundColor: color,
    borderWidth:0,
    yAxisID:"score-mayor"
};

var scoreData ={
    labels:
}
*/
