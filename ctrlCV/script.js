window.addEventListener("DOMContentLoaded", () => {
	const c = new CopypasteKeyboard(".keyboard");
});

class CopypasteKeyboard {
	constructor(el) {
		this.el = document.querySelector(el);

		this.init();
	}
	get isMac() {
		return /(Mac|iP[ahno]+[de])/i.test(navigator.userAgent);
	}
	init() {
		window.addEventListener("keydown", this.keyAction.bind(this, true));
		window.addEventListener("keyup", this.keyAction.bind(this, false));
	}
	keyAction(down, e) {
		let { key } = e;
		const isCmd = key === "Meta" && this.isMac;
		const isCtrl = key === "Control" && !this.isMac; // for non-Apple only

		if (isCmd || isCtrl) key = "cmd";

		const keyEl = this.el?.querySelector(`[data-key="${key}"]`);
		const activeClass = "active";

		if (down === true) keyEl?.classList.add(activeClass);
		else keyEl?.classList.remove(activeClass);
	}
}
