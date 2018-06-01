/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart', 'bar', 'table']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawTopicsChart);
google.charts.setOnLoadCallback(drawMessageChart);
google.charts.setOnLoadCallback(drawLikesChart);
google.charts.setOnLoadCallback(drawDislikesChart);
google.charts.setOnLoadCallback(drawRepliesChart);
google.charts.setOnLoadCallback(drawUsersChart);

// Messages
function reformatTopicsData(jsonData){
    var temp= jsonData.Topics;
    console.log(temp)
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;

    for(i=0; i < temp.length && i < 10; i++) {
        dataElement = [];
        dataElement.push(temp[i]["hashtag"]);
        dataElement.push(temp[i]["total"]);
        result.push(dataElement);
    }
    console.log(result);
    return result;
}


function drawTopicsChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/topics",
        dataType: "json",
        async: false
    }).responseText;
    console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Hashtag');
    data.addColumn('number', 'Hashtag Usage');
    data.addRows(reformatTopicsData(JSON.parse(jsonData)));

    var options = {
        title: 'Trending Topics',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Trending Topics',
            minValue: 0
        },
        vAxis: {
            title: 'Hashtag'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('trendingTopics'));

    chart.draw(data, options);

}


// Messages
function reformatMessageData(jsonData){
    var temp= jsonData.Messages;
    console.log(temp)
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);

    for(i=0; i < keys.length; i++) {
        dataElement = [];
        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
        result.push(dataElement);
    }
    console.log(result);
    return result;
}


function drawMessageChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/messages",
        dataType: "json",
        async: false
    }).responseText;
    console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Number of Messages');
    data.addRows(reformatMessageData(JSON.parse(jsonData)));

    var options = {
        title: 'Messages per day',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Total Messasges',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('messagesPerDay'));

    chart.draw(data, options);

}

//Dislikes 
function reformatRepliesData(jsonData){
    var temp= jsonData.Messages;
    console.log(temp)
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);

    for(i=0; i < keys.length; i++) {
        dataElement = [];
        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
        result.push(dataElement);
    }
    console.log(result);
    return result;
}


function drawRepliesChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/replies",
        dataType: "json",
        async: false
    }).responseText;
    console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Total Replies');
    data.addRows(reformatRepliesData(JSON.parse(jsonData)));

    var options = {
        title: 'Replies per day',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Total Replies',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('repliesPerDay'));

    chart.draw(data, options);

}


//Likes 
function reformatLikeData(jsonData){
    var temp= jsonData.Likes;
    console.log(temp)
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);

    for(i=0; i < keys.length; i++) {
        dataElement = [];
        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
        result.push(dataElement);
    }
    console.log(result);
    return result;
}


function drawLikesChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/likes",
        dataType: "json",
        async: false
    }).responseText;
    console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Total Likes');
    data.addRows(reformatLikeData(JSON.parse(jsonData)));

    var options = {
        title: 'Likes per day',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Total Likes',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('likesPerDay'));

    chart.draw(data, options);

}


//Dislikes 
function reformatDislikeData(jsonData){
    var temp= jsonData.Dislikes;
    console.log(temp)
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);

    for(i=0; i < keys.length; i++) {
        dataElement = [];
        dataElement.push(keys[i]);
        dataElement.push(temp[keys[i]][0]);
        result.push(dataElement);
    }
    console.log(result);
    return result;
}


function drawDislikesChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/dislikes",
        dataType: "json",
        async: false
    }).responseText;
    console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Total Dislikes');
    data.addRows(reformatDislikeData(JSON.parse(jsonData)));

    var options = {
        title: 'Dislikes per day',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Total Dislikes',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('dislikesPerDay'));

    chart.draw(data, options);

}

//Users
function reformatUsersData(jsonData){
    var temp= jsonData.Users;
    console.log(temp)
    console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    console.log(keys);

    for(i=keys.length-1; i > 0; i--) {
        for(var j=0; j < temp[keys[i]].length && j<10; j++) {
            dataElement = [];
            dataElement.push(keys[i]);
            dataElement.push(j+1);
            dataElement.push(temp[keys[i]][j]["username"]);
            dataElement.push(temp[keys[i]][j]["totalmessages"]);
            result.push(dataElement);
        }
    }
    console.log(result);
    return result;
}


function drawUsersChart() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/users",
        dataType: "json",
        async: false
    }).responseText;
    console.log(jsonData);
    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', 'Position');
    data.addColumn('string', 'Username');
    data.addColumn('number', 'Total Messages');
    data.addRows(reformatUsersData(JSON.parse(jsonData)));

    var chart = new google.visualization.Table(document.getElementById('activeUsers'));

    chart.draw(data, {showRowNumber: true, width: '100%', height: '100%'});

}

