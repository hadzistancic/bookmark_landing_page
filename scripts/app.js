import { Tabs } from "./tabs.js";

//initializing tab events
new Tabs();

//NAVIGATION
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", function () {
	nav.classList.toggle("open");
});
