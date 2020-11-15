var damage_atc = 0

// Autoclicker: "autoclicker"

var act = setInterval(autoclicker, 1000);;
var acp = 30;
var acq = 0;
var act_clcks = 0;


function buy_act() {
	if (this.taps > this.acp - 1) {
	this.taps -= this.acp + 1;
	this.act_clcks += 1;
	this.acp *=2;
	this.acq +=1
	this.damage_atc = act_clcks;
	document.getElementById('acp').innerHTML = ("Autoclicker: 1tap/s (" + this.acp + "taps) quantity: " + this.acq + "x" + "<br>" + 1 * acq + "taps/s");
	}
	else {this.taps +=0}
}

function autoclicker() {
	this.taps += parseInt(this.act_clcks)
}

// Autoclicker : "superclicker"


var sct = 0;
var scp = 100;
var scq = 0;



function buy_sct() {
	if (this.lvl > 0) {
	if (this.taps > this.scp - 1) {
	this.taps -= this.scp + 1;
	superclicker();
	this.sct = setInterval(superclicker, 1000);
	this.scp *=2;
	this.scq +=1
	this.damage_atc +=5
	document.getElementById('scp').innerHTML = ("Superclicker: +5taps/s (" + this.scp + "taps) quantity: " + this.scq + "x" + "<br>" + 5 * scq + "taps/s");
	}}
	if (this.lvl < 0) {
	this.taps +=0
	}
}

function superclicker() {
	this.taps +=5
}

// Autoclicker: "Love"

var lt = 0;
var lp = 200;
var lq = 0;



function buy_lt() {
	if (this.lvl > 1) {
	if (this.taps > this.lp - 1) {
	this.taps -= this.lp + 1;
	love();
	this.lt = setInterval(love, 1000);
	this.lp *=2;
	this.lq +=1;
	this.damage_atc +=10;
	document.getElementById('lcp').innerHTML = ("Love: +10taps/s (" + this.lp + "taps) quantity: " + this.lq + "x" + "<br>" + 10 * lq + "taps/s");
	}}
	if (this.lvl < 1) {
	this.taps +=0
	}
}

function love() {
	this.taps +=10
}

// Autoclicker: "Heart"

var ht = 0;
var hp = 400;
var hq = 0;



function buy_ht() {
	if (this.lvl > 4) {
	if (this.taps > this.hp - 1) {
	this.taps -= this.hp + 1;
	heart();
	this.ht = setInterval(heart, 1000);
	this.hp *=2;
	this.hq +=1;
	this.damage_atc +=20;
	document.getElementById('hcp').innerHTML = ("Heart: " + "tap/s (" + this.hp + "taps) quantity: " + this.hq + "x" + "<br>" + 20 * hq + "taps/s");
	}}
	if (this.lvl < 4) {
	this.taps +=0
	}
}

function heart() {
	this.taps +=20
}


// Autoclicker: "Soul"

var soul_t = 0;
var soul_p = 1000;
var soul_q = 0;



function buy_soul_t() {
	if (this.lvl > 9) {
	if (this.taps > this.soul_p - 1) {
	this.taps -= this.soul_p + 1;
	soul();
	this.soul_t = setInterval(soul, 1000);
	this.soul_p *=2;
	this.soul_q +=1;
	this.damage_atc +=100;
	document.getElementById('soul_cp').innerHTML = ("Soul: 100tap/s" + this.soul_t + "tap/s (" + this.soul_p + "taps) quantity: " + this.soul_q + "x" + "<br>" + 20 * soul_q + "taps/s");
	}}
	if (this.lvl < 9) {
	this.taps +=0
	}
}

function soul() {
	this.taps += 100
}


// Ring Of Damage 

var rod_price = 999

function buy_ringofdamage() {
	if (this.taps > this.rod_price) {
		this.taps -= this.rod_price + 1;
		this.taps_plus *=2;
		document.getElementById('lvl_t').innerHTML = "YOUR LVL: " + this.lvl + "<br>" + "lvl:up = " + this.lvlprice + "<br>" + "1tap = " + taps_plus + "taps";
		document.getElementById('rod').style.display = "none";
	}

}
