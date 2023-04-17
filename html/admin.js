let checkLogin = localStorage.getItem('loginUser');

if(!checkLogin){
    window.location.href = "auth-login-basic.html";
}