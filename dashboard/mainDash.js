// Get references to UI elements
let Debug = document.getElementById('debugDash');

log("Debug working");
// Declare global variables
var X;
var Y;
var Z;
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
 
 particle.getVariable({ deviceId: myDevice, name: "containerWeight", auth: myToken }).then(function(data1) {
    // insert code to do something with stream.body.result
   Z = data1.body.result;
   log("Z: "+Z);
    document.getElementById("data1").innerHTML = Z;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
   particle.getVariable({ deviceId: myDevice, name: "angleX", auth: myToken }).then(function(data2) {
    // insert code to do something with stream.body.result
   X = data2.body.result;
   log("X: "+X);
    document.getElementById("data2").innerHTML = X;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
   particle.getVariable({ deviceId: myDevice, name: "angleY", auth: myToken }).then(function(data3) {
    // insert code to do something with stream.body.result
   Y = data3.body.result;
   log("Y: "+Y);
    document.getElementById("data3").innerHTML = Y;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
});

