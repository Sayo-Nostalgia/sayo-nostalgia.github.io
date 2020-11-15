var alltaps = parseInt(localStorage.getItem('alltaps'));
if (localStorage.getItem('alltaps') == 'NaN') {localStorage.setItem('alltaps', 0); alltaps = parseInt(localStorage.getItem('alltaps'));}

var taps = parseInt(localStorage.getItem('taps_lcstrg'));
if (localStorage.getItem('taps_lcstrg') == 'NaN') {localStorage.setItem('taps_lcstrg', 0); taps = parseInt(localStorage.getItem('taps_lcstrg'));}

var t = setInterval(showtaps, 10);
var taps_sec = 0

taps_sl()

function taps_sl() {
	localStorage.setItem('taps_lcstrg', taps);
	localStorage.getItem('taps_lcstrg');
}

function alltaps_sl() {
	localStorage.setItem('alltaps', alltaps);
	localStorage.getItem('alltaps');
}

var taps_saveload_int = setInterval(taps_sl, 1000)
var alltaps_saveload_int = setInterval(alltaps_sl, 1000)

var null_taps_sec_int = setInterval(null_taps_sec, 1100);
var show_tap_sec_int = setInterval(show_tap_sec, 1000);



function tap() {
	this.taps += this.taps_plus;
	this.taps_sec += this.taps_plus;
	alltaps += 1;
	if (alltaps == 1) {
		ach_1tap()
	}
}

// Player Taps

function null_taps_sec() {
this.taps_sec = 0;
}

function show_tap_sec() {
	document.getElementById('click_sec_info').innerHTML = "You: <br>" + this.taps_sec + "taps/s";

}

// Player Taps

function showtaps() {
	document.getElementById('taps').innerHTML = taps + " taps!";

}

// Autoclickers info


function info_atcs() {
	document.getElementById('autoclick_info').innerHTML = "Autoclickers: <br>" + this.damage_atc + "taps/s"
}


// Ring of damage info

function rod_show() {
	document.getElementById('charact_rod').style.display = 'block'
}

function rod_hide() {
	document.getElementById('charact_rod').style.display = 'none'
}

// Level info

function lvl_t_show() {
	document.getElementById('lvl_t').style.display = 'block'
}

function lvl_t_hide() {
	document.getElementById('lvl_t').style.display = 'none'
}

