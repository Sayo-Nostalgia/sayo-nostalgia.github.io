var lvl = 0;
document.getElementById('lvl_t').innerHTML = "YOUR LVL: " + this.lvl + "<br>" + "lvl:up = " + this.lvlprice + "<br>" + "1tap = " + taps_plus + "taps";
var lvlprice = 15;
var taps_plus = 1

function lvl_up() {

	if (this.taps > this.lvlprice - 1) {
	this.lvl += 1;
	this.taps -= this.lvlprice;
	this.lvlprice *= 2;
	this.taps_plus += 1;
	
	if (lvl == 1) {
		ach_1lvl()
	}

	// Ring of damage x2
		if (this.rod_quantity = 1) {
			this.taps_plus *=2
			this.taps_plus -=2
		}
	
	document.getElementById('lvl_t').innerHTML = "YOUR LVL: " + this.lvl + "<br>" + "lvl:up = " + this.lvlprice + "<br>" + "1tap = " + taps_plus + "taps";
	}
	if (this.taps < this.lvlprice - 1) {
	}

	// Check superclick active
	if (this.lvl > 0) {
	var scp_color = document.getElementById('scp')
	scp_color.style.color = 'white'}


	// Check love active
	if (this.lvl > 1) {
	var lcp_color = document.getElementById('lcp')
	lcp_color.style.color = 'white'
}

	// Check heart active
	if (this.lvl > 4) {
	var hcp_color = document.getElementById('hcp')
	hcp_color.style.color = 'white'
}

	// Check soul active
	if (this.lvl > 9) {
	var soul_cp_color = document.getElementById('soul_cp')
	soul_cp_color.style.color = 'white'
}


}


