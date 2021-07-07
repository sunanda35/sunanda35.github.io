google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ["Skills", "Skills"],
    ["Java", 60],
    ["JavaScript", 80],
    ["Node.js", 80],
    ["React.js", 50],
    ["Next.js", 40],
    ["jQuery", 30],
    ["Flutter", 45],
    ["MongoDB", 80],
    ["MySQL", 65],
    ["Android", 55],
    ["Express.js", 70],
    ["WebRTC", 50],
    ["Socket.io", 60],
    ["HTML", 60],
    ["CSS", 50],
    ["SCSS", 50],
    ["Bootstrap", 50],
    ["Docker", 40],
    ["CI/CD", 30],
    ["Git", 80],
  ]);

  var options = {
    chartArea: { width: "auto", height: "100%" },
    hAxis: {
      title: "Skill Strength",
      minValue: 20,
    },
    vAxis: {
      title: "Skills",
    },
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}
