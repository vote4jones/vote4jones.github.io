'use strict'

//collapsible
var coll = document.getElementsByClassName("policy-collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", collapse);
}

function collapse() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
