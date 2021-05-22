import { Tabs } from "./tabs.js";
import { Accordion } from "./accordion.js";
import { scrollToTop } from "./scrollToTop.js";

//initializing tabs logic
new Tabs();
//initializing accordion logic
new Accordion();
//initializing scroll to top btn logic
new scrollToTop();

//NAVIGATION
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", function () {
	nav.classList.toggle("open");
});
