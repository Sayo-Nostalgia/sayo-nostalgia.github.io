
function attack1() {
	this.hp2 -= this.dmg1
	document.getElementById('hp2').innerHTML = "HP:" + hp2
	this.active = 2
	document.getElementById('p1').style.display = "none"
	document.getElementById('p2').style.display = "block"
}

function attack2() {
	this.hp1 -= this.dmg2
	document.getElementById('hp1').innerHTML = "HP:" + hp1
	this.active = 1
	document.getElementById('p2').style.display = "none"
	document.getElementById('p1').style.display = "block"
}