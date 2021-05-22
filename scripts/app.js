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
const body = document.querySelector("body");
const navAnchors = document.querySelectorAll(".nav__item--anchor");

hamburger.addEventListener("click", function () {
	nav.classList.toggle("open");
	if (nav.classList.contains("open")) {
		body.classList.add("prevent-scroll");
	} else {
		body.classList.remove("prevent-scroll");
	}
});

navAnchors.forEach((anchor) =>
	anchor.addEventListener("click", function () {
		if (nav.classList.contains("open")) {
			body.classList.remove("prevent-scroll");
			nav.classList.remove("open");
		}
	})
);
