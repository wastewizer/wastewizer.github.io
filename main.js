
// Get references to UI elements
var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");
var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");
var Debug = document.getElementById('debug');

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
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);
        alert(email + "  Thanks for registering. \nTry to login Now");
        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " is already registered.");
        return ;
    }
}

function login(){
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;  
    particle.login({ username : email, password : password }).then(function(data) {
        alert("Logged in as " + email);
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        window.location.href = "dashboard";
        return;
    }, function(err) {
        alert("Invalid Email/Password Combination");
        return;
    });
}

function forgot(){
      event.preventDefault();
      var email = document.getElementById("fe").value;
      if(emailArray.indexOf(email) == -1){
          if (email == ""){
              alert("Email required.");
              return ;
          }
          alert("Email does not exist.");
          return ;
      }
      alert("Email sent. \n  Thanks");
      document.getElementById("fe").value ="";
}
