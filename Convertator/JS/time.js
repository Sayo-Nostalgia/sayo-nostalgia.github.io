function c_ms() {
	document.getElementById('sec').value = document.getElementById('msec').value / 1000;
	document.getElementById('min').value = document.getElementById('msec').value / 60000;
	document.getElementById('hour').value = document.getElementById('msec').value / 3600000;
}

function c_s() {
	document.getElementById('msec').value = document.getElementById('sec').value * 1000;
	document.getElementById('min').value = document.getElementById('sec').value / 60;
	document.getElementById('hour').value = document.getElementById('sec').value / 3600;
}

function c_m() {
	document.getElementById('msec').value = document.getElementById('min').value * 60000;
	document.getElementById('sec').value = document.getElementById('min').value * 60;
	document.getElementById('hour').value = document.getElementById('min').value / 60;
}

function c_h() {
	document.getElementById('msec').value = document.getElementById('hour').value * 3600000;
	document.getElementById('sec').value = document.getElementById('hour').value * 3600;
	document.getElementById('min').value = document.getElementById('hour').value * 60;
}