(function () {
	// Buttons ID's
	var sunButton = document.getElementById("sunButton");
	var nightButton = document.getElementById("nightButton");
	var sunButtonSun = document.getElementById("sunButtonSun");
	var moonButtonMoon = document.getElementById("moonButtonmoon");

	// CSS Variables function for setting and revieving values
	var cssVar = {
		// Function for retrieving the css variable value by passing the element class and the css variable it is associated with
		getCSSVariableProperty(element, cssVar) {
			var controlsSidebar = document.querySelector(element);
			var cssStyles = getComputedStyle(controlsSidebar);
			return String(cssStyles.getPropertyValue(cssVar));
		},
		// Function for setting variable property values
		setCSSVariableProperty(cssVar, value) {
			document.documentElement.style.setProperty(cssVar, value);
		}
	};

	function Stars(numberOfStars, divID) {
		var chosenDiv = document.getElementById(divID);
		chosenDiv.style.display = "none";
		chosenDiv.innerHTML = "";
		function randomFrom(array) {
			return array[Math.floor(Math.random() * array.length)];
		}
		var text = "";
		var i;
		for (i = 0; i < numberOfStars; i++) {
			bigRange = Array.apply(null, Array(100)).map(function (_, i) {
				return i;
			});
			smallRange = Array.apply(null, Array(3)).map(function (_, i) {
				return i;
			});
			tenRange = Array.apply(null, Array(5)).map(function (_, i) {
				return i;
			});
			starTwinkleStage = randomFrom("9", "13");
			var top = randomFrom(bigRange);
			var right = randomFrom(bigRange);
			var width = randomFrom(smallRange);
			text += "<style></style>";
			text +=
				"<div class='stars' style='top:" +
				top +
				"%; right: " +
				right +
				"%; width:" +
				width +
				"px; height:" +
				width +
				"px;";
			text += "box-shadow: 0px 0px 1vw rgba(255, 255, 255, 0.2);'></div>";
			chosenDiv.innerHTML = text;
			chosenDiv.style.display = "block";
		}
	}
	Stars(15, "stars");

	function sunEnter() {
		sunButtonSun.style.left = "5%";
		sunButtonSun.style.top = "5%";
	}
	function moonEnter() {
		moonButtonmoon.style.right = "10%";
		moonButtonmoon.style.top = "10%";
	}
	function sunLeave() {
		sunButtonSun.style.left = "-50%";
		sunButtonSun.style.top = "-50%";
	}
	function moonLeave() {
		moonButtonmoon.style.right = "-50%";
		moonButtonmoon.style.top = "-50%";
	}
	function sunBigger() {
		sunButton.style.width = "90%";
		nightButton.style.width = "10%";
	}
	function moonBigger() {
		sunButton.style.width = "10%";
		nightButton.style.width = "90%";
	}
	function cssVarsSetLighten() {
		// Water
		cssVar.setCSSVariableProperty("--shining-light-color", "#f5df9c");
		cssVar.setCSSVariableProperty("--other-water-bg", "#6e6a8f");
		cssVar.setCSSVariableProperty("--dark-water-bg", "#88b2d3");
		// Buildings
		cssVar.setCSSVariableProperty("--building-bg-color", "#cf505f");
		cssVar.setCSSVariableProperty("--building-light-bg-color", "#fd817e");
		cssVar.setCSSVariableProperty("--first-step-bg-color", "#a69ba3");
		cssVar.setCSSVariableProperty("--second-step-bg-color", "#5f6171");
		// windows
		cssVar.setCSSVariableProperty("--window-glass-color", "#626473");
		cssVar.setCSSVariableProperty("--window-shadow-out-color", "#b74254");
		cssVar.setCSSVariableProperty("--window-shadow-in-color", "#454859");
		cssVar.setCSSVariableProperty("--window-glass-shine-color", "#96899d");
		cssVar.setCSSVariableProperty("--window-frame-color", "#d4d0da");
		// Steps
		cssVar.setCSSVariableProperty("--first-step-bg-color", "#a69ba3");
		cssVar.setCSSVariableProperty("--second-step-bg-color", "#5f6171");
		// Sky
		cssVar.setCSSVariableProperty("--cloud-white", "#ffffff");
		cssVar.setCSSVariableProperty("--cloud-dark-white", "#feebef");
		cssVar.setCSSVariableProperty("--sky-bg-color", "#bbdcd5");
		cssVar.setCSSVariableProperty(
			"--star-background-color",
			"rgba(241, 241, 241, 0)"
		);

		cssVar.setCSSVariableProperty(
			"--sky-foreground",
			"linear-gradient(to bottom, rgba(136,191,232,0) 0%,rgba(245,221,156,1) 100%)"
		);
		cssVar.setCSSVariableProperty(
			"--boat-reflection",
			"rgba(128, 125, 154, 0.5)"
		);
		// Man
		cssVar.setCSSVariableProperty("--man-bg-color", "#73627c");
		// water
		cssVar.setCSSVariableProperty("--dark-water-bg", "#88b2d3");
		cssVar.setCSSVariableProperty("--other-water-bg", "#6e6a8f");
		// moon
		cssVar.setCSSVariableProperty(
			"--moon-background-color",
			"rgba(255, 255, 255, 0)"
		);
	}
	function cssVarsSetDarken() {
		// Water
		cssVar.setCSSVariableProperty("--shining-light-color", "#ffd147");
		cssVar.setCSSVariableProperty("--other-water-bg", "#353069");
		cssVar.setCSSVariableProperty("--dark-water-bg", "#595a90");
		// Buildings
		cssVar.setCSSVariableProperty("--building-bg-color", "#5b161c");
		cssVar.setCSSVariableProperty("--building-light-bg-color", "#7c2f49");
		cssVar.setCSSVariableProperty("--first-step-bg-color", "#a69ba3");
		cssVar.setCSSVariableProperty("--second-step-bg-color", "#5f6171");
		// windows
		cssVar.setCSSVariableProperty("--window-glass-color", "#fde6bc");
		cssVar.setCSSVariableProperty("--window-shadow-out-color", "#7c2f47");
		cssVar.setCSSVariableProperty(
			"--window-shadow-in-color",
			"rgba(0, 0, 0, 0.26)"
		);
		cssVar.setCSSVariableProperty("--window-glass-shine-color", "#fde6bc");
		cssVar.setCSSVariableProperty("--window-frame-color", "#786a83");
		// Steps
		cssVar.setCSSVariableProperty("--first-step-bg-color", "#a69ba3");
		cssVar.setCSSVariableProperty("--second-step-bg-color", "#5f6171");
		// Sky
		cssVar.setCSSVariableProperty("--cloud-white", "rgba(254, 235, 239, 0)");
		cssVar.setCSSVariableProperty("--cloud-dark-white", "rgba(254, 235, 239, 0)");
		cssVar.setCSSVariableProperty("--sky-bg-color", "#1a0818");
		cssVar.setCSSVariableProperty(
			"--sky-foreground",
			"linear-gradient(to bottom, rgba(136,191,232,0) 0%,#967973 100%)"
		);
		cssVar.setCSSVariableProperty("--star-background-color", "#f1f1f1");

		cssVar.setCSSVariableProperty("--boat-reflection", "rgba(64, 61, 82, 0.81)");
		// Man
		cssVar.setCSSVariableProperty("--man-bg-color", "#292638");
		// moon
		cssVar.setCSSVariableProperty(
			"--moon-background-color",
			"rgba(255, 255, 255, 1)"
		);
	}

	sunButton.addEventListener("mouseover", function () {
		cssVarsSetLighten();
		moonLeave();
		sunEnter();
		sunBigger();
	});

	nightButton.addEventListener("mouseover", function () {
		cssVarsSetDarken();
		sunLeave();
		moonBigger();
		moonEnter();
	});

	// for smaller devices
	sunButton.addEventListener("click", function () {
		cssVarsSetLighten();
		moonLeave();
		sunEnter();
		sunBigger();
	});
	nightButton.addEventListener("click", function () {
		cssVarsSetDarken();
		sunLeave();
		moonBigger();
		moonEnter();
	});
})();
