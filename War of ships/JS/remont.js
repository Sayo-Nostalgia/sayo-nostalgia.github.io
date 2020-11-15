var hp1 = 10000
var hp2 = 10000
var rem1 = 100
var rem2 = 100

var rem1c = 250
var rem2c = 250

document.getElementById('hp1').innerHTML = "HP:" + this.hp1 
document.getElementById('hp2').innerHTML = "HP:" + this.hp2 

function remont1() {
		if (this.bal1 > this.rem1c) {
			this.hp1 += this.rem1
			document.getElementById('hp1').innerHTML = "HP:" + hp1
			this.bal1 -= this.rem1c
			document.getElementById('balance1').innerHTML = "BALANCE: " + bal1
			this.active = 2
			document.getElementById('p1').style.display = "none"
			document.getElementById('p2').style.display = "block"
	}
}

function remont2() {
		if (this.bal2 > this.rem2c) {
			this.hp2 += this.rem2
			document.getElementById('hp2').innerHTML = "HP:" + hp2
			this.bal2 -= this.rem2c
			document.getElementById('balance2').innerHTML = "BALANCE: " + bal2
			this.active = 1
			document.getElementById('p2').style.display = "none"
			document.getElementById('p1').style.display = "block"
	}
}
