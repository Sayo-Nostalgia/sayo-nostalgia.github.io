var hp_p = 15;
var hp_b = 5;

var enemy = 3

var attack = 1;
var dmg1 = 3;
var dmg2 = 2;
var dmg3 = 0.5;

var sum1 = attack + dmg1
var sum2 = attack + dmg2
var sum3 = attack + dmg3

var combo = ''
var combo_r = '2-1-3-'


function attack_1() {
	hp_b -= sum1;
	combo += '1-'
	if (hp_b < 0.1) {
		enemy -= 1;
		if (enemy > 0) {installation_fight()};
		if (enemy < 1) {next2()};
		document.getElementById('history').innerHTML += '<br> Вы одолели волка!';
	};
	document.getElementById('hp_b').innerHTML = 'Волк: ' + hp_b + 'HP';
	document.getElementById('history').innerHTML += '<br> Вы нанесли врагу ' + sum1 + 'ед. урона'
	bot()
}

function attack_2() {
	hp_b -= sum2;
	combo += '2-'
	if (hp_b < 0.1) {
		enemy -= 1;
		if (enemy > 0) {installation_fight()};
		if (enemy < 1) {next2()};
		document.getElementById('history').innerHTML += '<br> Вы одолели волка!';
	};
	document.getElementById('hp_b').innerHTML = 'Волк: ' + hp_b + 'HP';
	document.getElementById('history').innerHTML += '<br> Вы нанесли врагу ' + sum2 + 'ед. урона'
	bot()
}

function attack_3() {
	hp_b -= sum3;
	combo += '3-'
	if (hp_b < 0.1) {
		enemy -= 1;
		if (enemy > 0) {installation_fight()};
		if (enemy < 1) {next2()};
		document.getElementById('history').innerHTML += '<br> Вы одолели волка!';
	};
	if (combo == '2-1-3-') {
		hp_b -=5; combo = ''; document.getElementById('history').innerHTML += '<br> Вы нанесли врагу ' + 5 + 'ед. урона(Особая атака)';
		document.getElementById('history').innerHTML += '<br> Вы одолели волка!';
		if (hp_b < 0.1) {
		enemy -= 1;
		if (enemy > 0) {installation_fight()};
		if (enemy < 1) {next2()};
	};}
	document.getElementById('hp_b').innerHTML = 'Волк: ' + hp_b + 'HP';
	document.getElementById('history').innerHTML += '<br> Вы нанесли врагу ' + sum3 + 'ед. урона'
	bot()
}
