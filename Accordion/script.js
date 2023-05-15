"use strict";
const itemArray = document.querySelectorAll(".switch");
for (let i = 0; i < itemArray.length; i++) {
  const toggleOpenClose = function () {
    if (itemArray[i].classList.contains("open")) {
      itemArray[i].classList.remove("open");
    } else {
      itemArray[i].classList.add("open");
    }
  };
  itemArray[i].addEventListener("click", toggleOpenClose);
}
