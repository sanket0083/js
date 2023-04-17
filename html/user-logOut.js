const logOut = () => {
    localStorage.removeItem('loginUser');
    window.location.href = "auth-login-basic.html";
}