
/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart']});

console.log("Loaded API");

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(trendingTopicsChart);
google.charts.setOnLoadCallback(messagesPerDayChart);
google.charts.setOnLoadCallback(repliesPerDayChart);
google.charts.setOnLoadCallback(usersPerDayChart);
google.charts.setOnLoadCallback(likesPerDayChart);
google.charts.setOnLoadCallback(dislikesPerDayChart);

console.log("Loaded functions");


function reformatData(jsonData){
    var temp= jsonData.PartCounts;
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.id + '-' + row.name);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function trendingTopicsChart(){
    var jsonData = $.ajax({
        url: "http://localhost:5000/dashboard/topics",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topics');
    data.addColumn('number', 'Number of Topics');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Trending Topics',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Topics',
            minValue: 0
        },
        vAxis: {
            title: 'Number of Topics'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('trending_topics'));
    chart.draw(data, options);
}

function messagesPerDayChart(){
    var jsonData = $.ajax({
        url: "http://localhost:5000/dashboard/messages",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Days');
    data.addColumn('number', 'Messages');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Messages Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Messages'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('messages_per_day'));
    chart.draw(data, options);
}

function repliesPerDayChart() {
    var jsonData = $.ajax({
        url: "http://localhost:5000/dashboard/replies",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Days');
    data.addColumn('number', 'Number of Replies');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Replies Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Number of Replies'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('replies_per_day'));
    chart.draw(data, options);
}

function usersPerDayChart(){
    var jsonData = $.ajax({
        url: "http://localhost:5000/dashboard/users",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Days');
    data.addColumn('number', 'Number of Users');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Users Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Users'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('users_per_day'));
    chart.draw(data, options);
}

function likesPerDayChart(){
    var jsonData = $.ajax({
        url: "http://localhost:5000/dashboard/likes",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Days');
    data.addColumn('number', 'Number of Likes');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Likes Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Number of Likes'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('likes_per_day'));
    chart.draw(data, options);
}

function dislikesPerDayChart(){
    var jsonData = $.ajax({
        url: "http://localhost:5000/dashboard/dislikes",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Days');
    data.addColumn('number', 'Number of Dislikes');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Dislikes Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Number of Dislikes'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('dislikes_per_day'));
    chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(trendingTopicsChart);
google.charts.setOnLoadCallback(messagesPerDayChart);
google.charts.setOnLoadCallback(repliesPerDayChart);
google.charts.setOnLoadCallback(usersPerDayChart);
google.charts.setOnLoadCallback(likesPerDayChart);
google.charts.setOnLoadCallback(dislikesPerDayChart);
