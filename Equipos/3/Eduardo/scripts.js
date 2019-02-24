window.onload = function() {
	let radios = document.getElementsByTagName("input");
	for (var i = 0; i < radios.length; i++) {
		radios[i].addEventListener("click", function () {
			var previous = document.getElementsByClassName("feedback");
			if (previous[0] != null) {
				previous[0].remove();
			}
			var msg = document.createElement('p');
			msg.textContent = this.value;
			msg.className = "feedback";
			var minijuego = document.getElementsByClassName("minijuego");
			if (minijuego[0] != null) {
				minijuego[0].appendChild(msg);
			}
			else {
				var a = document.getElementsByClassName("navflecha-r");
				var parent = a[0].parentNode;
				parent.insertBefore(msg, a[0]);
			}
		})
	}
}
