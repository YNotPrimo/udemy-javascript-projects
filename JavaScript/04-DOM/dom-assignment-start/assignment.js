const firstTask = document.getElementById("task-1");
// const firstTask = document.querySelector("#task-1");
firstTask.style.backgroundColor = "black";
firstTask.style.color = "white";

// First Way
let title = document.querySelector("title")
// Second Way
// let head = document.head;
// const title = head.getElementsByTagName("title")[0];
title.textContent = "Assignment - Solved!";



const h1 = document.getElementsByTagName("h1");
h1[0].textContent = "Assignment - Solved!"