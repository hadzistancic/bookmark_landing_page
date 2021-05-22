export class Tabs {
	constructor() {
		this.tabButtons = document.querySelectorAll(".tabs__btn");
		this.addEventListeners();
	}

	addEventListeners() {
		this.tabButtons.forEach((button) =>
			button.addEventListener("click", this.showTab)
		);
	}

	showTab() {
		if (!this.classList.contains("active")) {
			const tabId = this.dataset.forTab;
			const tabNav = this.parentElement;
			const tabContainer = tabNav.parentElement;
			const tabToShow = document.querySelector(
				`.tabs__content-wrapper[data-tab="${tabId}"]`
			);

			tabNav.querySelectorAll(".tabs__btn").forEach((btn) => {
				btn.classList.remove("active");
			});
			tabContainer.querySelectorAll(".tabs__content-wrapper").forEach((tab) => {
				tab.classList.remove("active");
			});
			this.classList.add("active");
			tabToShow.classList.add("active");
		}
	}
}

new Tabs();
