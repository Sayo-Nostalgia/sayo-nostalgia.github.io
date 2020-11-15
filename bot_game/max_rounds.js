function set_max_rounds_x() {
	max_rounds = parseInt(document.getElementById('rounds_x').value);
	console.log('max_rounds = ' + max_rounds);
	check_mr = 1
	console.log('check_mr is ' + check_mr)
	interval_max_rounds()
}

function max_rounds_on() {
	document.getElementById('off_max_rounds').checked = false;
	document.getElementById('rounds_x').disabled = false;
	document.getElementById('apply_max_rounds').disabled = false;
}

function max_rounds_off() {
	document.getElementById('on_max_rounds').checked = false;
	document.getElementById('rounds_x').disabled = true;
	document.getElementById('apply_max_rounds').disabled = true;
	check_mr = 0;
	if (pause_m == 0) {
		speed_plus();
		speed_minus();
	}
}

function interval_max_rounds() {
	var interval = setInterval(check_rounds, 1)
}

function check_rounds() {
	if (this.check_mr == 1) {
			if (rounds == max_rounds) {clearInterval(int)}
		}
}