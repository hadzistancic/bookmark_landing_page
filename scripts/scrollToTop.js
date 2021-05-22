export class scrollToTop {
	constructor() {
		this.btn = document.querySelector(".btn-scroll-to-top");
		this.showScrollBtn = this.showScrollBtn.bind(this);
		this.debounceScroll = this.debounce(this.showScrollBtn, 300);
		this.addEventListeners();
	}

	addEventListeners() {
		window.addEventListener("scroll", this.debounceScroll);
		this.btn.addEventListener("click", this.scrollToTop);
	}

	scrollToTop() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	showScrollBtn() {
		if (window.scrollY > 350) {
			this.btn.classList.add("active");
		} else {
			this.btn.classList.remove("active");
		}
	}

	debounce(fn, delay) {
		let timer;
		return function () {
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn();
			}, delay);
		};
	}
}
