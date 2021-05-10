<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Codechef', 1],
    ['Codeforces', 2],
    ['VJudge', 56],
    ['Mentorpick',90],
    ['Interviewbit',68]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Score', 'width':550, 'height':400};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);