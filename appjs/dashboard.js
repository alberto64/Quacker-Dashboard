/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawMessageChart);
google.charts.setOnLoadCallback(drawLikesChart);
google.charts.setOnLoadCallback(drawDisLikesChart);
google.charts.setOnLoadCallback(drawRepliesChart);


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
        dataElement = [];
        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
        result.push(dataElement);
    }

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

    var chart = new google.visualization.BarChart(document.getElementById('chart_MessagePerDay'));

    chart.draw(data, options);

}
//---------------------------------------------------------------------------------------
//Chart for Likes per day
function reformatLikesData(jsonData){
    var temp= jsonData.Likes;
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);

    for(i=0; i < keys.length; ++i) {
        console.log();
        console.log();
        dataElement = [];
        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
        result.push(dataElement);
    }

    return result;
}
function drawLikesChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/likes",
        dataType: "json",
        async: false
    }).responseText;
   // console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Likes');

    data.addRows(reformatLikesData(JSON.parse(jsonData)));

    var options = {
        title: 'Likes per day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number of Likes',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_LikesPerDay'));

    chart.draw(data, options);

}

//-----------------------------------------------------------------------------------------------------------
//Draw chart for dislikes per day
function reformatDisLikesData(jsonData){
    var temp= jsonData.Dislikes;
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);

    for(i=0; i < keys.length; ++i) {
        console.log();
        console.log();
        dataElement = [];
        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
        result.push(dataElement);
    }

    return result;
}
function drawDisLikesChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/dislikes",
        dataType: "json",
        async: false
    }).responseText;
   // console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Dislikes');

    data.addRows(reformatDisLikesData(JSON.parse(jsonData)));

    var options = {
        title: 'Disikes per day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number of Dislikes',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_DisLikesPerDay'));

    chart.draw(data, options);

}



//------------------------------------------------------------------------------------------------------------

//Draw chart for replies per day
function reformatRepliesData(jsonData){
    var temp= jsonData.MessagesReplies;
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);

    for(i=0; i < keys.length; ++i) {
        console.log();
        console.log();
        dataElement = [];
        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
        result.push(dataElement);
    }

    return result;
}
function drawRepliesChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/replies",
        dataType: "json",
        async: false
    }).responseText;
   // console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Replies');

    data.addRows(reformatDisLikesData(JSON.parse(jsonData)));

    var options = {
        title: 'Replies per day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number of Replies',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_RepliesPerDay'));

    chart.draw(data, options);

}




//-----------------------------------------------------------------------------------
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMessageChart);
google.charts.setOnLoadCallback(drawLikesChart);
google.charts.setOnLoadCallback(drawDisLikesChart);
google.charts.setOnLoadCallback(drawRepliesChart);

