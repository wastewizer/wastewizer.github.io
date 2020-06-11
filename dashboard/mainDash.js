// Get references to UI elements
let Debug = document.getElementById('debugDash');

log("Debug working");
// Declare global variables
let weight;
var particle = new Particle();
var user = "aclark@wastewizer.com";
var pass = "Wastewizer.1";
var myToken;

document.getElementById("weight").innerHTML = 'Hello World!!';

function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}


particle.login({ username : "aclark@wastewizer.com", password : "Wastewizer.1" }).then(function(data) {
  log('Login Successful');
  log(data.body.access_token);
  
  var myDevice = 'e00fce68a38d68b5d14b3e8b';
  myToken = data.body.access_token;
 
 particle.getVariable({ deviceId: myDevice, name: "containerWeight", auth: myToken }).then(function(data1) {
    // insert code to do something with stream.body.result
   weight = data1.body.result;
   log(weight);
    document.getElementById("weight").innerHTML = "Weight is " + data1.body.result;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
   particle.getVariable({ deviceId: myDevice, name: "angleX", auth: myToken }).then(function(data2) {
    // insert code to do something with stream.body.result
   weight = data2.body.result;
   log(weight);
    document.getElementById("weight").innerHTML = "Weight is " + data2.body.result;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
   particle.getVariable({ deviceId: myDevice, name: "angleY", auth: myToken }).then(function(data3) {
    // insert code to do something with stream.body.result
   weight = data3.body.result;
   log(weight);
    document.getElementById("weight").innerHTML = "Weight is " + data3.body.result;
 }, function(err) {
        log("An error occurred retrieving data:", err);
  });
  
});

particle.createUser({ username: user, password: pass }).then(function(data) 
  var loginPromise = particle.login('example@email.com', 'pass');
    loginPromise.then(
      function(data) {
        log('Login successful! access_token:', data.access_token);
      },
      function(err) {
        log('Login failed:', err);
      }
    );

