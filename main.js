'use strict';

var interval = 1000;
var banners = document.querySelector("#banner-area");

function bannerMovement(){
        setInterval(() => {
        console.log(banners);

    }, interval);
}

bannerMovement();