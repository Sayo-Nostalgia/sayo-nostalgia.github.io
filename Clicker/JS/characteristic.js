// Characteristic autoclicker show

function cas_show() {
	document.getElementById('acp').innerHTML = 'Available!'
	document.getElementById('acp').style.width = '250px'
}

function cas_hide() {
	document.getElementById('acp').innerHTML = "Autoclicker: 1tap/s (" + this.acp + "taps) quantity: " + this.acq + "x" + "<br>" + 1 * acq + "taps/s"
}

// Characteristic superclicker show

function sas_show() {
	if (this.lvl < 1) {
		document.getElementById('scp').innerHTML = 'Need: 1lvl <br>'
		document.getElementById('scp').style.width = '250px'
	}

	if (this.lvl > 0) {
		document.getElementById('scp').innerHTML = 'Available!'
		document.getElementById('scp').style.width = '250px'
	}
}

function sas_hide() {
	document.getElementById('scp').innerHTML = "Superclicker: 5tap/s (" + this.scp + "taps) quantity: " + this.scq + "x" + "<br>" + 5 * scq + "taps/s"
}

// Characteristic love show

function las_show() {
	if (this.lvl < 2) {
		document.getElementById('lcp').innerHTML = 'Need: 2lvl <br>'
		document.getElementById('lcp').style.width = '250px'
	}

	if (this.lvl > 1) {
		document.getElementById('lcp').innerHTML = 'Available!'
		document.getElementById('lcp').style.width = '250px'
	}

}

function las_hide() {
	document.getElementById('lcp').innerHTML = "Love: 10tap/s (" + this.lp + "taps) quantity: " + this.lq + "x" + "<br>" + 10 * lq + "taps/s"
}

// Characteristic heart show

function has_show() {
	if (this.lvl < 5) {
		document.getElementById('hcp').innerHTML = 'Need: 5lvl <br>'
		document.getElementById('hcp').style.width = '250px'
	}

	if (this.lvl > 4) {
		document.getElementById('hcp').innerHTML = 'Available!'
		document.getElementById('hcp').style.width = '250px'
	}

}

function has_hide() {
	document.getElementById('hcp').innerHTML = "Heart: 20tap/s (" + this.hp + "taps) quantity: " + this.hq + "x" + "<br>" + 20 * hq + "taps/s"
}

// Characteristic soul show


function soul_as_show() {
	if (this.lvl < 10) {
		document.getElementById('soul_cp').innerHTML = 'Need: 10lvl <br>'
		document.getElementById('soul_cp').style.width = '250px'
	}

	if (this.lvl > 9) {
		document.getElementById('soul_cp').innerHTML = 'Available!'
		document.getElementById('soul_cp').style.width = '250px'
	}

}

function soul_as_hide() {
	document.getElementById('soul_cp').innerHTML = "Soul: " + this.soul_t + "tap/s (" + this.soul_p + "taps) quantity: " + this.soul_q + "x" + "<br>" + 100 * soul_q + "taps/s"
}