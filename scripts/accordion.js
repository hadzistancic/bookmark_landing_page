export class Accordion {
	constructor() {
		this.accordionBtns = document.querySelectorAll(".accordion__btn");
		this.addEventListeners();
	}
	addEventListeners() {
		this.accordionBtns.forEach((btn) =>
			btn.addEventListener("click", this.toggleAccordion)
		);
	}
	toggleAccordion() {
		this.classList.toggle("active");
		const accordionBody = this.nextElementSibling;
		if (this.classList.contains("active")) {
			accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
		} else {
			accordionBody.style.maxHeight = 0;
		}
	}
}
