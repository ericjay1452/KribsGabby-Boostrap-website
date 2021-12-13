'use strict';
const biSearch = document.querySelector("#bi-search");
const form_id = document.querySelector("#form");
const see = document.querySelector("#see");
const Bug = document.querySelector("#Bug");
const burger_Line =  document.querySelector(".burger-line");
const listWrapper = document.querySelector("#listwrapper");
const mobilelist = document.querySelector(".mobilelist");

biSearch.addEventListener("click", function(){
    form_id.classList.toggle("form-class");
    see.classList.toggle("fork");
})

Bug.addEventListener("click", Effect);

function Effect () {
  burger_Line.classList.toggle("slideIn");
  listWrapper.classList.toggle("In");
  mobilelist.classList.toggle("view")
}


