let MainImg = document.getElementById("MainImg");

let ImageForCall = document.getElementsByClassName("ImageForCall");


ImageForCall[1].onclick = function () {
    MainImg.src = ImageForCall[1].src;
}

ImageForCall[2].onclick = function () {
    MainImg.src = ImageForCall[2].src;
}

ImageForCall[3].onclick = function () {
    MainImg.src = ImageForCall[3].src;
}

ImageForCall[4].onclick = function () {
    MainImg.src = ImageForCall[4].src;
}

// ImageForCall[1].onclick = function () {
//     MainImg.src = ImageForCall[1].src;
// }

// MainImg.src = ImageForCall[4].src;


// let LoginForm = document.getElementById("login-form");
// let SignUpForm = document.getElementById("signup-form");

// let Indicator = document.getElementById("Indicator");

// function signup() {
//     SignUpForm.style.transform = "translateX(0px)";
//     LoginForm.style.transform = "translateX(0px)";
// }

// function login() {
//     SignUpForm.style.transform = "translateX(0px)";
//     LoginForm.style.transform = "translateX(0px)";
// }