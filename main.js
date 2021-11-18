'use strict';

var interval = 2000;
var i = 0;
var banners = document.querySelectorAll(".banner div");
function hell(){
    switch (i){
        case 0:
            document.querySelectorAll(".banner")[1].classList.add("hide");
            document.querySelectorAll(".banner")[2].classList.add("hide");
            document.querySelectorAll(".banner")[1].classList.remove("reappear");
            document.querySelectorAll(".banner")[2].classList.remove("reappear");

            document.querySelectorAll(".banner")[1].classList.add("hide");
            document.querySelectorAll(".banner")[2].classList.add("hide");
            break;
        case 1:
            document.querySelectorAll(".banner")[2].classList.add("hide");
            document.querySelectorAll(".banner")[1].classList.remove("hide");

            document.querySelectorAll(".banner")[1].classList.add("reappear");
            break;
        case 2:
            document.querySelectorAll(".banner")[2].classList.remove("hide");
            document.querySelectorAll(".banner")[2].classList.add("reappear");
            break;
    }
}
function bannerMovement(){
        setInterval(() => {
            if(i > 2){
                i = 0;
            }

            hell();
            // for(var j = 0; j < 3; j++){
            //     //i = currently displayed
            //     //attach hide to all that isn't i
            //     if(j == i){
            //         document.querySelectorAll(".banner")[j].classList.remove("hide");
            //     } else {
            //         document.querySelectorAll(".banner")[j].classList.add("hide");
            //     }
            // }
            i++;
    }, interval);
}
//case 1: 1, _, 3
//^ 3 must be blank
//case 2: 1, 2, _
//^ none need to be blank
//case 0: _, 2, 3
//2 and 3 are blank

bannerMovement();