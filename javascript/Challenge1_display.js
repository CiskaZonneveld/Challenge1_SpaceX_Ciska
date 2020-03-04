//alert("Welkom!");


//pagina automatisch herladen, zodat dat altijd goed in beeld blijft staan
$(document).ready(function(){
  $(window).resize(function(){
    location.reload();
  });
});

function myResize(){
    drawSnelheidsMeter;
    drawBasic;
    drawChart;
}



//snelheidsmeter
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawSnelheidsMeter);

function drawSnelheidsMeter() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['snelheid', 25543]
    ]);

    var options = {
          width: 400, height: 180,
          redFrom: 28000, redTo: 30000,
          yellowFrom:25000, yellowTo: 28000,
          minorTicks: 5, max: 30000
    };

    var chart = new google.visualization.Gauge(document.getElementById('snelheidsmeter'));
    chart.draw(data, options);
   
    setInterval(function() {
        data.setValue(0, 1, 25500 + Math.round(1000 * Math.random()));
        chart.draw(data, options);
    }, 1000);
}


//brandstof verbruik
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Dagen', 'Brandstof'],
        ['0', 100],
        ['50', 96],
        ['100', 92],
        ['150', 85],
        ['200', 79],
        ['250', 68],
        ['300', 61]
      ]);
    
    var options = {
        title: 'Brandstof',
        hAxis: {
          title: 'Dagen',
          viewWindow: {
            min: [0],
            max: [7]
          }
        },
        vAxis: {
          title: 'Brandstof (in %)',
            ticks: [0,25,50,75, 100]
        }
      };

    var chart = new google.visualization.ColumnChart(
        document.getElementById('brandstofverbruik'));

    chart.draw(data, options);
}



//afstand-tijd grafiek
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var totaleAfstand = 55758006
    var afgelegd = 11101
    
    var data = google.visualization.arrayToDataTable([
        ['Dagen', 'Km'],
        ['0',  0],
        ['50',  1970],
        ['100',  3487],
        ['150',  5670],
        ['200',  7960],
        ['250',  9134],
        ['300',  afgelegd]
    ]);

    var options = {
        title: 'Afstand tegen tijd grafiek',
        hAxis: {title: 'Dagen', titleTextStyle: {color: '#333'}},
        vAxis: {title: 'Afstand in km', minValue: 0}
    };

    document.getElementById('afstand').innerHTML = afgelegd;
    document.getElementById('totaleAfstand').innerHTML = totaleAfstand;
    
    var chart = new google.visualization.AreaChart(document.getElementById('areagrafiek'));
    chart.draw(data, options);
}
