// Your code goes here
console.log("Before DOMContentLoaded listener");

document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
  const paragraph = document.getElementById("text");
  paragraph.textContent = "This is really cool!";
});
