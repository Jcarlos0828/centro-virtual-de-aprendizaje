window.onload = function() {
	let dl = document.getElementsByTagName("dl");
	for (var i = 0; i < dl.length; i++) {
		dl[i].hidden = true;
	}
	let selected = document.getElementById("letra-glosario");
	let previous = "";
	selected.addEventListener("click", function () {
		if (previous != "") {
			document.getElementById(previous).hidden = true;
		}
		let letter = selected.value;
		let show = document.getElementById(letter);
		show.hidden = false;
		previous = letter;
	})
}