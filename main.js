// Get references to UI elements
let Debug = document.getElementById('debug');

var weight;
var particle = new Particle();

particle.login({ username : "aclark@wastewizer.com", password : "Wastewizer.1" }).then(function(data) {
  log('Login Successful');
  log(data.body.access_token);
  particle.getEventStream({ deviceId: 'e00fce68a38d68b5d14b3e8b', name: "StringWeight", auth: data.body.access_token }).then(function(stream) {
    stream.on('event', function(feed) {
      log('Get Event Successful');
      log(feed.data);
      weight = feed.data;
      document.getElementById("weight").innerHTML = 'Hello World!!';
    });
  });
});


function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}




let YesButton = document.getElementById('confirm');

// Send pickup notice on button click
YesButton.addEventListener('click', function() {
  sendNotice();
});

function sendNotice() {
 
}
