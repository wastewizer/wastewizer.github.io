// Get references to UI elements
let sendForm = document.getElementById('login');
let inputUsername = document.getElementById('username');
let inputPassword = document.getElementById('password');
let Debug = document.getElementById('debug');

log("Debug working");
log(Client_ID_1);

function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

function validateForm() {
  var user = document.forms["LoginInfo"]["uname"].value;
  var pass = document.forms["LoginInfo"]["psw"].value;
  if (user == "aclark@wastewizer.com") {
    log(pass);
      if (pass == "Wastewizer.1") {
        location.href = "dashboard";
      } else {
        alert("Invalid Username/Password Combination");
        inputPassword.value = '';  // Zero text field
        inputPassword.focus();     // Focus on text field
      }
  } else
    alert("Invalid Username/Password Combination");
    inputPassword.value = '';  // Zero text field
    inputPassword.focus();     // Focus on text field
}

// Handle login form submit event
sendForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form sending
  return validateForm(); // Send text field contents
  
});
