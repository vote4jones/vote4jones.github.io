'use strict';

var interval = 1000;
var i = 0;
var banners = document.querySelectorAll(".banner div");
function bannerMovement(){
        setInterval(() => {
            if(i > 2){
                i = 0;
            }

            for(var j = 0; j < 3; j++){
                //i = currently displayed
                //attach hide to all that isn't i
                if(j == i){
                    document.querySelectorAll(".banner")[j].classList.remove("hide");
                } else {
                    document.querySelectorAll(".banner")[j].classList.add("hide");
                }
            }
            i++;
    }, interval);
}

bannerMovement();