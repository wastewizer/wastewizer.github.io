
// Get references to UI elements
var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");
var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");
var Debug = document.getElementById('debug');

// Create particle object
var particle = new Particle();

// token "granted" when user logs in
sessionStorage.setItem("token","denied");

// Debug functions
log("Debug working");
function log(data) {
  Debug.insertAdjacentHTML('afterend', '<div>' + data + '</div>');
}

// Login Page tab formatting
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
    regTab.style.backgroundColor="royalblue";
    loginTab.style.backgroundColor="royalblue";
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
    sessionStorage.email = document.getElementById("se").value;
    sessionStorage.password = document.getElementById("sp").value;

    if (sessionStorage.email == ""){
        alert("Email required.");
        return ;
    }
    else if (sessionStorage.password == ""){
        alert("Password required.");
        return ;
    }
    particle.login({ username : sessionStorage.email, password : sessionStorage.password }).then(function(data) {
        alert("Logged in as " + sessionStorage.email);
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        sessionStorage.setItem("token","granted");
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
