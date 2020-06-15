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
 
 particle.getVariable({ deviceId: myDevice, name: "sgStr", auth: myToken }).then(function(data1) {
    // insert code to do something with stream.body.result
   sgStr = data1.body.result;
   log("sgStr: "+sgStr);
    document.getElementById("data1").innerHTML = sgStr;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
   particle.getVariable({ deviceId: myDevice, name: "angleStr1", auth: myToken }).then(function(data2) {
    // insert code to do something with stream.body.result
   angleStr1 = data2.body.result;
   log("angleStr1: "+angleStr1);
    document.getElementById("data2").innerHTML = angleStr1;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
   particle.getVariable({ deviceId: myDevice, name: "angleStr2", auth: myToken }).then(function(data3) {
    // insert code to do something with stream.body.result
   angleStr2 = data3.body.result;
   log("angleStr2: "+angleStr2);
    document.getElementById("data3").innerHTML = angleStr2;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
});

