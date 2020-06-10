// Get references to UI elements
let YesButton = document.getElementById('confirm');
let Debug = document.getElementById('debug');

log('Hello World');
console.log('Hello');
var weight;
var particle = new Particle();

/*
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

*/

function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

// Send pickup notice on button click
YesButton.addEventListener('click', function() {
  sendNotice();
});
