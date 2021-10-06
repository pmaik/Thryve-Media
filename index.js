// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var logo = document.getElementsByClassName("navImg")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        logo.classList.add("navImg1");
    } else {
        navbar.classList.remove("sticky");
        logo.classList.remove("navImg1");
    }
}


/* Part 3*/
// For Search Part
function searchShow(){
    var btn = document.getElementsByClassName("search-img")[0];
    btn.classList.add("search-img1");

    var para = document.getElementsByClassName("search-hide")[0];
    setTimeout(()=>{
        para.classList.add("search-hide1");
    }, 800);
}

function searchHide(){
    var btn = document.getElementsByClassName("search-img")[0];
    btn.classList.remove("search-img1");

    var para = document.getElementsByClassName("search-hide")[0];
    para.classList.remove("search-hide1");
}

// For Video Part
function videoShow(){
    var btn = document.getElementsByClassName("video-img")[0];
    btn.classList.add("video-img1");

    var para = document.getElementsByClassName("video-hide")[0];
    setTimeout(()=>{
        para.classList.add("video-hide1");
    }, 800);

}

function videoHide(){
    var btn = document.getElementsByClassName("video-img")[0];
    btn.classList.remove("video-img1");

    var para = document.getElementsByClassName("video-hide")[0];
    para.classList.remove("video-hide1");
}

// For Mobile Part 
function mobileShow(){
    var btn = document.getElementsByClassName("mobile-img")[0];
    btn.classList.add("mobile-img1");

    var para = document.getElementsByClassName("mobile-hide")[0];
    setTimeout(()=>{
        para.classList.add("mobile-hide1");
    }, 800);
}

function mobileHide(){
    var btn = document.getElementsByClassName("mobile-img")[0];
    btn.classList.remove("mobile-img1");

    var para = document.getElementsByClassName("mobile-hide")[0];
    para.classList.remove("mobile-hide1");
}


// Part-1 Toggle NavBar
function toggleNav(){
    var nav = document.getElementsByClassName("Navbar")[0];

    if(nav.style.display === ""){
        nav.style.display = "block";
    }
    else{
        nav.style.display = "";
    }
}