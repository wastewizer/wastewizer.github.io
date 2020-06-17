// Get references to UI elements
let sendForm = document.getElementById('login');
let inputUsername = document.getElementById('username');
let inputPassword = document.getElementById('password');
let Debug = document.getElementById('debug');

log("Debug working");

function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

function login() {
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
sendForm.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form sending
  login(); // login
  
  
});
