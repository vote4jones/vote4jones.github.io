'use strict';

var interval = 6000;
var intervalID;
var i = 0;
var banners = document.querySelectorAll(".banner div");
const element1 = document.querySelector('.button');
var elements = document.getElementsByClassName("banner-button");

//make circle plus arrows
//on event listener, add class to hell function
//reset interval?
//don't forget to create new pages
//and change the color of the buttons

var bannerForwards = function() {
    if(i > 2){
        i = 0;
    } else if(i < 0){
        i = 2;
    } 
    clearInterval(intervalID);
    intervalID = setInterval(bannerMovement, interval);
    hell(true);
};
elements[1].addEventListener('click', bannerForwards, false);

var bannerBack = function() {
    if(i < 0){
        i = 2;
    } else if(i > 2){
        i = 0;
    }
    clearInterval(intervalID);
    intervalID = setInterval(bannerMovement, interval);
    console.log(i);
    hell(false);
};
elements[0].addEventListener('click', bannerBack, false);

var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    console.log("a");
  });
}

    


function hell(dir){
    console.log("prev " + i)
    if(dir != false){
        i++;
    } else{
        i--;
    }

    if(i < 0){
        i = 2;
    } else if(i > 2){
        i = 0;
    }
    switch (i){
        case 0:
            document.querySelectorAll(".banner")[1].classList.add("hide");
            document.querySelectorAll(".banner")[2].classList.add("hide");
            document.querySelectorAll(".banner")[1].classList.remove("reappear");
            document.querySelectorAll(".banner")[2].classList.remove("reappear");

            document.querySelectorAll(".circle")[0].classList.add("circle-highlighted");
            document.querySelectorAll(".circle")[2].classList.remove("circle-highlighted");
            document.querySelectorAll(".circle")[1].classList.remove("circle-highlighted");
            break;
        case 1:
            document.querySelectorAll(".banner")[2].classList.add("hide");
            document.querySelectorAll(".banner")[1].classList.remove("hide");

            document.querySelectorAll(".banner")[1].classList.add("reappear");
            document.querySelectorAll(".banner")[2].classList.remove("reappear");

            document.querySelectorAll(".circle")[0].classList.remove("circle-highlighted");
            document.querySelectorAll(".circle")[1].classList.add("circle-highlighted");
            document.querySelectorAll(".circle")[2].classList.remove("circle-highlighted");
            break;
        case 2:
            document.querySelectorAll(".banner")[2].classList.remove("hide");
            document.querySelectorAll(".banner")[2].classList.add("reappear");

            document.querySelectorAll(".circle")[0].classList.remove("circle-highlighted");
            document.querySelectorAll(".circle")[1].classList.remove("circle-highlighted");
            document.querySelectorAll(".circle")[2].classList.add("circle-highlighted");
            break;
    }

    console.log("new " + i)
}

function bannerMovement(){
            if(i > 2){
                i = 0;
            } 
            hell(true);
            // console.log(i);
}
//case 1: 1, _, 3
//^ 3 must be blank
//case 2: 1, 2, _
//^ none need to be blank
//case 0: _, 2, 3
//2 and 3 are blank

function init(){
    intervalID = setInterval(bannerMovement, interval);
}

init();