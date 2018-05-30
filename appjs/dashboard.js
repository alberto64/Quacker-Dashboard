/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawMessageChart);

//function reformatData(jsonData){
//    var temp= jsonData.Topics;
//    console.log("temp: " + JSON.stringify(temp));
//    var result = [];
//    var i;
//    var row;
//    for (i=0; i < temp.length; ++i){
//        row= temp[i]
//        dataElement = [];
//        dataElement.push(row.id + '-' + row.name);
//        dataElement.push(row.count);
//        result.push(dataElement);
//    }
//    console.log("Data: " + JSON.stringify(result));
//    return result;
//}
//function drawChart() {
//    var jsonData = $.ajax({
//        url: "http://quacker-pr.herokuapp.com/dashboard/topics",
//        dataType: "json",
//        async: false
//    }).responseText;
//    console.log(jsonData);
//    console.log("jsonData: " + JSON.parse(jsonData));
//
//    // Create our data table out of JSON data loaded from server.
//    var data = new google.visualization.DataTable();
//    data.addColumn('string', 'Parts');
//    data.addColumn('number', 'Stock');
//
//    data.addRows(reformatData(JSON.parse(jsonData)));
//
//    var options = {
//        title: 'Stock Parts by Id/name',
//        chartArea: {width: '50%'},
//        hAxis: {
//            title: 'Total Number',
//            minValue: 0
//        },
//        vAxis: {
//            title: 'Part'
//        }
//    };
//
//    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
//
//    chart.draw(data, options);
//
//}

function reformatMessageData(jsonData){
    var temp= jsonData.Messages;
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);
    for(i=0; i < keys.length; ++i) {
        console.log();
        console.log();

        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
    }

     for (i=0; i < temp.length; ++i){

        //console.log("Checking the values of each key")
        //console.log(key);
       // console.log(temp[key]);
        row= temp[i]
        dataElement = [];

        result.push(dataElement);

  }
//  console.log("Data: " + JSON.stringify(result));
    return result;
}
function drawMessageChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/messages",
        dataType: "json",
        async: false
    }).responseText;
   // console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'messagesPerDay');

    data.addRows(reformatMessageData(JSON.parse(jsonData)));

    var options = {
        title: 'Messages per day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number of Messasges',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);

}

google.charts.load('current', {packages: ['corechart', 'bar']});
//google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawMessageChart);


