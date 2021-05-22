import { Tabs } from "./tabs.js";
import { Accordion } from "./accordion.js";

//initializing tab logic
new Tabs();
//initializing accordion logic
new Accordion();

//NAVIGATION
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", function () {
	nav.classList.toggle("open");
});
