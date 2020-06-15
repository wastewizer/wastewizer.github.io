// Get references to UI elements
let Debug = document.getElementById('debugDash');

log("Debug working");
// Declare global variables
var sgStr;
var angleStr1;
var angleStr2;
var particle = new Particle();
var user = "aclark@wastewizer.com";
var pass = "Wastewizer.1";
var myToken;

function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}


particle.login({ username : user, password : pass }).then(function(data) {
  log('Login Successful');
  log(data.body.access_token);
  
  var myDevice = 'e00fce68a38d68b5d14b3e8b';
  myToken = data.body.access_token;
 
 particle.getVariable({ deviceId: myDevice, name: "strainGaugeReadings", auth: myToken }).then(function(data1) {
    // insert code to do something with stream.body.result
   strainGaugeReadings = data1.body.result;
   log("strainGaugeReadings: "+strainGaugeReadings);
    document.getElementById("data1").innerHTML = strainGaugeReadings;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
   particle.getVariable({ deviceId: myDevice, name: "angles1", auth: myToken }).then(function(data2) {
    // insert code to do something with stream.body.result
   angleStr1 = data2.body.result;
   log("angles1: "+angles1);
    document.getElementById("data2").innerHTML = angles1;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
  
});

