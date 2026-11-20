let title = document.getElementById("boardTitle");
title.innerHTML = "<span>Green Valley Society</span>";

let date = document.getElementById("boardDate");
date.innerHTML = "Updated: 12 Nov";

let urgent = document.querySelector("li.urgent");

urgent.style.color = "red";
urgent.style.fontWeight = "bold";
urgent.style.backgroundColor = "lightyellow";

let newNotice = document.getElementById("newNotice");
let text = newNotice.value;

let noticeList = document.getElementById("noticeList");

noticeList.innerHTML += "<li>" + text + "</li>";

let count = 3;

count = count + 1;

let noticeCount = document.getElementById("noticeCount");

noticeCount.innerHTML = "Total notices: " + count;

if (count > 3) {
  title.style.color = "red";
}
