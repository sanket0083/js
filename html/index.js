let user = JSON.parse(localStorage.getItem('loginUser'));
document.getElementById('loginUserName').innerText = user.name;
document.getElementById('loginUserEmail').innerText = user.email;

function imgShow() {
    let userdp = document.getElementsByClassName('uploadAvatar');
    for (let i of userdp) {
        i.src = user.img;
    }
}
imgShow()