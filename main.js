
// Get references to UI elements
var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");
var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");
var Debug = document.getElementById('debug');

var particle = new Particle();

log("Debug working");

function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

function regTabFun(){
    event.preventDefault();
    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
    regTab.style.backgroundColor="darkblue";
    loginTab.style.backgroundColor="royalblue";
}

function loginTabFun(){
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
    loginTab.style.backgroundColor="darkblue";
    regTab.style.backgroundColor="royalblue";
}

function forTabFun(){
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}

function register(){
    event.preventDefault();
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Passwords don't match.");
        return;
    }
    particle.createCustomer({ email : email, password : password}).then(function(data) {
        alert(email + "\nThanks for registering. \nTry to login now");
        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
        window.location.reload();
    }, function(err) {
        alert("New account could not be created.\nYou may have an existing account.");
        log(err);
        return;
    });
}

function login(){
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;  
    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    particle.login({ username : email, password : password }).then(function(data) {
        alert("Logged in as " + email);
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        window.location.href = "dashboard";
        return;
    }, function(err) {
        alert("Invalid Email/Password Combination");
        log(err);
        return;
    });
}

function forgot(){
    event.preventDefault();
    var email = document.getElementById("fe").value;
      
    if (email == ""){
        alert("Email required.");
        return ;
    }
    particle.resetPassword({username : email}).then(function(data) {
        alert("Email sent. \n  Thanks");
        document.getElementById("fe").value ="";
        return;
    }, function(err) {
        alert("User not found");
        log(err);
        return;
    });
}
