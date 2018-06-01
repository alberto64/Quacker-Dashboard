/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.

google.charts.setOnLoadCallback(drawMessageChart);
google.charts.setOnLoadCallback(drawLikesChart);
google.charts.setOnLoadCallback(drawDisLikesChart);
google.charts.setOnLoadCallback(drawReplies);
google.charts.setOnLoadCallback(drawTopics);
google.charts.setOnLoadCallback(drawUsers);

function reformatMessageData(jsonData){
    var temp= jsonData.Messages;
 // console.log("temp: " + JSON.stringify(temp));

  JSON.stringify(temp);

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    //console.log(keys.length);
    var nextDay;
    var nextCount;

    for(i=0; i < keys.length; ++i) {
        row = keys[i];
        nextDay = row;
        nextCount = temp[keys[i]][0];
       // console.log(nextDay);
        //console.log(nextCount);

        dataElement = [];

        dataElement.push("d-"+row);
        dataElement.push(parseInt(temp[keys[i]][0]));

        result.push(dataElement);
    }
  //  console.log("result: " + JSON.stringify(result));
    return result;
}
function drawMessageChart() {
    var jsonData = $.ajax({
        url: "https://quacker-pr.herokuapp.com/dashboard/messages",
        dataType: "json",
        async: false
    }).responseText;


      // console.log("jsonData: " + JSON.parse(jsonData));

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
   // console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);

    for(i=0; i < keys.length; ++i) {
    row = keys[i];
        nextDay = row;
        nextCount = temp[keys[i]][0];
    //    console.log(nextDay);
    //    console.log(nextCount);

        dataElement = [];

        dataElement.push("d-"+row);
        dataElement.push(parseInt(temp[keys[i]][0]));

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
//    console.log("jsonData: " + JSON.parse(jsonData));

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
//
////-----------------------------------------------------------------------------------------------------------
////Draw chart for dislikes per day


function reformatDisLikesData(jsonData){
    var temp= jsonData.Dislikes;
    //console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);
    for(i=0; i < keys.length; ++i) {
    row = keys[i];
        nextDay = row;
        nextCount = temp[keys[i]][0];
    //    console.log(nextDay);
     //   console.log(nextCount);

        dataElement = [];

        dataElement.push("d-"+row);
        dataElement.push(parseInt(temp[keys[i]][0]));

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

 //   console.log("jsonData: " + JSON.parse(jsonData));

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

////Draw chart for replies per day
function reformatRepliesData(jsonData){
    var temp= jsonData.Messages;
    //console.log(temp);
   // console.log("temp: " + JSON.stringify(temp));

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);

    for(i=0; i < keys.length; ++i) {
     row = keys[i];
        nextDay = row;
        nextCount = temp[keys[i]][0];
      //  console.log(nextDay);
      //  console.log(nextCount);

        dataElement = [];

        dataElement.push("d-"+row);
        dataElement.push(parseInt(temp[keys[i]][0]));

        result.push(dataElement);
    }
        return result;
     }

function drawReplies() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/replies",
        dataType: "json",
        async: false
    }).responseText;
   // console.log(jsonData);
   // console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Replies');

    data.addRows(reformatRepliesData(JSON.parse(jsonData)));

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
//Topics Chart
function reformatTopicsData(jsonData){
    var temp= jsonData.Topics;
   // console.log(temp);
 //   console.log("temp: " + JSON.stringify(temp));

//    console.log("key in position 0");
//    console.log(keys[0]);
//    console.log("key in position 0");
//    console.log("Object in position 0");

//    object = temp[0];
//    console.log(temp[0]);
//    var keyObject1 = Object.keys(object);
//    console.log("Key of the fist object:");
//    console.log(object[keyObject1[0]]);

    var result = [];
    var i;
    var row;
    var keys = Object.keys(temp);

    for(i=0; i < 10; ++i) {
        object = temp[i]

        var keyObject = Object.keys(object);
        dataElement = [];
        dataElement.push(object[keyObject[0]]);
     //   console.log("hashtag:"+object[keyObject[0]]);

        dataElement.push(object[keyObject[1]]);
      //  console.log("total:"+ object[keyObject[1]]);

        result.push(dataElement);
    }
        return result;
     }

function drawTopics() {
    var jsonData = $.ajax({
        url: "http://quacker-pr.herokuapp.com/dashboard/topics",
        dataType: "json",
        async: false
    }).responseText;
   // console.log(jsonData);
    //console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topic');
    data.addColumn('number', 'Total');

    data.addRows(reformatTopicsData(JSON.parse(jsonData)));

    var options = {
        title: 'Topics per day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number of Topics',
            minValue: 0
        },
        vAxis: {
            title: 'Topic'
        }

    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_TopicsPerDay'));

    chart.draw(data, options);
 }
//----------------------------------------------------------------------------------
//Chart for top 10 users

//-----------------------------------------------------------------------------------
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawReplies);
google.charts.setOnLoadCallback(drawMessageChart);
google.charts.setOnLoadCallback(drawLikesChart);
google.charts.setOnLoadCallback(drawDisLikesChart);
google.charts.setOnLoadCallback(drawTopics);
google.charts.setOnLoadCallback(drawUsers);
