// Get references to UI elements
let CostButton = document.getElementById('cost');
let StatusButton = document.getElementById('status');
let PickupButton = document.getElementById('pickup');
let Debug = document.getElementById('debug');

log('Hello World');
var weight;

particle.login({ username : "aclark@wastewizer.com", password : "Wastewizer.1" }).then(function(data) {
  log('Login Successful');
  log(data);
  particle.getEventStream({ deviceId: 'e00fce68a38d68b5d14b3e8b', name: "StringWeight", auth: data.body.access_token }).then(function(stream) {
    stream.on('event', function(feed) {
      log(feed.data);
      weight = feed.data;
      document.getElementById("weight").innerHTML = 'Hello World!!';
    });
  });
});

function log(data) {
  Debug.insertAdjacentHTML('beforeend',
      '<div>' + data + '</div>');
}

/*
// Connect to the device on Connect button click
CostButton.addEventListener('click', function() {
  connect();
});

// Disconnect from the device on Disconnect button click
StatusButton.addEventListener('click', function() {
  disconnect();
});

PickupButton.addEventListener('click', function() {
  disconnect();
});
