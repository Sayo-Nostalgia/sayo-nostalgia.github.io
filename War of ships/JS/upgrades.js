var dmg1 = 100
var dmg2 = 100

var upg_rem1_p = 150
var upg_rem2_p = 150

var upg_dmg1_p = 150;
var upg_dmg2_p = 150;

function upg_dmg1() {
	if (this.bal1 > this.rem1c) {
		this.dmg1 += 100
		this.bal1 -= this.upg_dmg1_p
		this.upg_dmg1_p += 100;
		document.getElementById('balance1').innerHTML = "BALANCE: " + bal1
		document.getElementById('dmg_b1').innerHTML = "Атака" + " (dmg: " + dmg1 + ")"
		document.getElementById('upg_dmg1').innerHTML = "Улучшение урона (+100)<br> Стоимость: " + this.upg_dmg1_p
		document.getElementById('p1').style.display = "none"
		document.getElementById('p2').style.display = "block"
	}
}

function upg_dmg2() {
	if (this.bal2 > this.rem2c) {
		this.dmg2 += 100
		this.bal2 -= this.upg_dmg2_p
		this.upg_dmg2_p += 100;
		document.getElementById('balance2').innerHTML = "BALANCE: " + bal2
		document.getElementById('dmg_b2').innerHTML = "Атака" + " (dmg: " + dmg2 + ")"
		document.getElementById('p2').style.display = "none"
		document.getElementById('p1').style.display = "block"
	}
}

function upg_rem1() {
	if (this.bal1 > this.rem1c) {
		this.rem1 += 100;
		this.rem1c += 300;
		this.bal1 -= this.upg_rem1_p
		this.upg_rem1_p +=50
		document.getElementById('rem_b1').innerHTML = "Ремонт корабля" + " (+" + rem1 + "HP)<br> Стоимость: " + this.rem1c 
		document.getElementById('balance1').innerHTML = "BALANCE: " + bal1
		document.getElementById('upg_rem1').innerHTML = "Улучшение ремонта корабля (+100)<br> Стоимость: " + this.upg_rem1_p
		document.getElementById('p1').style.display = "none"
		document.getElementById('p2').style.display = "block"
	}
}

function upg_rem2() {
	if (this.bal2 > this.rem2c) {
		this.rem2 += 100;
		this.rem2c += 300;
		this.bal2 -= this.upg_rem2_p
		this.upg_rem2_p +=50
		document.getElementById('rem_b2').innerHTML = "Ремонт корабля" + " (+" + rem2 + "HP)<br> Стоимость: " + this.rem2c 
		document.getElementById('balance2').innerHTML = "BALANCE: " + bal2
		document.getElementById('upg_rem2').innerHTML = "Улучшение ремонта корабля (+100)<br> Стоимость: " + this.upg_rem2_p
		document.getElementById('p2').style.display = "none"
		document.getElementById('p1').style.display = "block"
	}
}
