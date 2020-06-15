// Get references to UI elements
let Debug = document.getElementById('debugDash');
let Var1 = document.getElementById('var1');
let Var2 = document.getElementById('var2');

debugLog("Debug working");
// Declare global variables
var strainGaugeReadings;
var angles1;
var particle = new Particle();
var user = "aclark@wastewizer.com";
var pass = "Wastewizer.1";
var myToken;

function debugLog(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

function log1(data) {
  Var1.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

function log2(data) {
  Var2.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

particle.login({ username : user, password : pass }).then(function(data) {
  debugLog('Login Successful');
  debugLog(data.body.access_token);
  
  var myDevice = 'e00fce68a38d68b5d14b3e8b';
  myToken = data.body.access_token;
  
  getData(myDevice, myToken);
   
  // stop for sometime if needed
  setInterval(getData, 10000);
  
});

function getData(myDevice, myToken) {
  particle.getVariable({ deviceId: myDevice, name: "strainGaugeReadings", auth: myToken }).then(function(data1) {
    // insert code to do something with stream.body.result
   strainGaugeReadings = data1.body.result;
   log1("strainGaugeReadings: "+strainGaugeReadings);
    document.getElementById("data1").innerHTML = strainGaugeReadings;
  }, function(err) {
        log1("An error occurred retrieving data:", err);
  });
  
   particle.getVariable({ deviceId: myDevice, name: "angles1", auth: myToken }).then(function(data2) {
    // insert code to do something with stream.body.result
   angleStr1 = data2.body.result;
   log2("angles1: "+angles1);
    document.getElementById("data2").innerHTML = angles1;
  }, function(err) {
        log2("An error occurred retrieving data:", err);
    });
}
