// Get references to UI elements
let sendForm = document.getElementById('login');
let inputUsername = document.getElementById('username');
let inputPassword = document.getElementById('password');
let Debug = document.getElementById('debug');

function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

function validateForm() {
  var user = document.forms["LoginInfo"]["uname"].value;
  var pass = document.forms["LoginInfo"]["psw"].value;
  if (user == "") {
    alert("Username must be filled out");
    return false;
  } else if (pass == "") {
    alert("Password must be filled out");
    return false;
  } else if (user == "aclark@wastewizer.com") {
    log(pass);
      if (pass.localeCompare("Wastewizer.1")) {
        location = "dashboard";
      } else {
        alert("Invalid Username/Password Combination");
      }
  }
}

// Handle login form submit event
sendForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form sending
  send(inputField.value); // Send text field contents
  inputPassword.value = '';  // Zero text field
  inputPassword.focus();     // Focus on text field
});
