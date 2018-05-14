


// high and low tides
//https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=20180512&end_date=20180513&datum=MLLW&station=8661070&time_zone=lst_ldt&units=english&interval=hilo&format=json

// var beginDate = "&begin_date=20180511";
// var endDate = "&end_date=20180512";
// var today = "date=today"

var springmaid = "&station=8661070";
var wrightsville = "&station=8658163";  
var charleston = "&station=8665530"; 

// air temperature
//var airTemp = "&product=air_temperature";    
// water temperature
//var waterTemp = "&product=water_temperature";   
// wind
//var wind = "&product=wind";
// humidity
//var humidity = "&product=humidity";

//var tides = "&interval=hilo";


var beginning = "https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&datum=MLLW";
var ending = "&interval=hilo&units=english&time_zone=lst&application=NOS.COOPS.TAC.WL&format=json";
var start = "&begin_date=20180511";
var end = "&end_date=20180512";
var station = "&station=8661070";

var queryURLtide = beginning + start + end + station + ending;

   console.log("this is tide url " + queryURLtide);

 //   var queryURLwaterTemp = "https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180511&end_date=20180512&station=8665530&product=water_temperature&units=english&time_zone=lst&application=NOS.COOPS.TAC.WL&format=json"

  //  var queryURLair = "https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180511&end_date=20180512&station=8665530&product=air_temperature&units=english&time_zone=lst&application=NOS.COOPS.TAC.WL&format=json"

  //  var queryURLwind = "https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180511&end_date=20180512&station=8665530&product=wind&units=english&time_zone=lst&application=NOS.COOPS.TAC.WL&format=json"

//$("#submit").on("click", function() {
 //   var city = $("#input").val();
 //   console.log("this is " + city);

   
    
 $.ajax({
    url: queryURLtide,
    method: "GET"
  }).then(function(response) {
      console.log("this is response: " + response);


      //---------------time delay function------------
      //var a = response.predictions[0].t;   

    //   setTimeout(function()
    //   {
    //       var a = response.predictions[0].t;  
    //       console.log("this is var a = " + a);  //voila!
      
    //   }, 1000);
//-------------------------------------------------------

    // var x =JSON.parse(JSON.stringify(response));
    // console.log("this is x" + x);
    // console.log("this is " + x[1]);





    //   var tides = JSON.stringify(response);

    //   console.log("this is tides var = " + tides);

     

    //  console.log("this is high tide: " + tides.predictions[0].t);
    //  console.log("this is low tide: " + response.predictions[1].t);


    setTimeout(function() {
      console.log("this is low tide: " + response["predictions"][1].t);

    }, 4000);
     

    //  $("#highTide").text("high tide: " + response.predictions[0].t);
    //  $("#lowTide").text("low tide: " + response.predictions[1].t);
  });

  



// var response1 = { "predictions" : [ {"t":"2018-05-11 03:46", "v":"4.805", "type":"H"},
//                                              {"t":"2018-05-11 10:01", "v":"0.287", "type":"L"},
//                                              {"t":"2018-05-11 16:08", "v":"5.080", "type":"H"},
//                                              {"t":"2018-05-11 22:40", "v":"0.472", "type":"L"},]
//                             };
     

