function start_quest1() {
	document.getElementById('d1').style.display = 'none';
	document.getElementById('d2').style.display = 'block';
	document.getElementById('button_next').innerHTML = 'Далее';
	document.getElementById('button_next').setAttribute('onclick', 'next()');
}

function next() {
	document.getElementById('d2p').innerHTML = '<b>Незнакомец 2: </b>Спасибо, удачи тебе!';
	document.getElementById('button_next').setAttribute('onclick', 'fight()')
}

function next2() {
	document.getElementById('d2p').innerHTML = '*Вы видите 3 волка.*';
	document.getElementById('button_next').setAttribute('onclick', 'fight()')
}

function fight() {
	document.getElementById('d2').style.display = 'none';
	document.getElementById('dialog').style.display = 'none';
	document.getElementById('game').style.display = 'block';
	var enemy = 3;
}

function installation_fight() {
	hp_b = 5;
	document.getElementById('hp_b').innerHTML = 'Волк: ' + hp_b + 'HP';
}

function next2() {
	document.getElementById('game').style.display = 'none';
	document.getElementById('d2').style.display = 'block';
	document.getElementById('dialog').style.display = 'block';
	document.getElementById('d2p').innerHTML = '"Спасибо, тебе, воин!"';
	document.getElementById('button_next').setAttribute('onclick', 'end()');
}

function end() {
	document.location.href = "../quest_2/index.html"
}