let noticeCount = 0;
let categoryColor = "orange";

const newNotice = document.getElementById("newNotice");
const addBtn = document.getElementById("addBtn");
const noticeList = document.getElementById("noticeList");
const noticeCountElement = document.getElementById("noticeCount");
const category = document.getElementById("category");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");

function addNotice() {
  let text = newNotice.value.trim();

  if (text === "") {
    alert("Write a notice first");
    return;
  }

  let li = document.createElement("li");
  li.textContent = text;

  li.style.borderLeft = "5px solid " + categoryColor;

  noticeList.appendChild(li);

  noticeCount++;
  noticeCountElement.textContent = noticeCount;

  newNotice.value = "";
  charCount.textContent = "0";
}

addBtn.addEventListener("click", addNotice);

category.onchange = function () {
  if (category.value === "Maintenance") {
    categoryColor = "orange";
  } else if (category.value === "Event") {
    categoryColor = "green";
  } else if (category.value === "Security") {
    categoryColor = "red";
  }
};

newNotice.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addNotice();
  } else {
    charCount.textContent = event.target.value.length;
  }
});

clearBtn.onclick = function () {
  noticeList.innerHTML = "";
  noticeCount = 0;
  noticeCountElement.textContent = "0";
};
