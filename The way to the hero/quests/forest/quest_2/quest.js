function next() {
	document.getElementById('d2').style.display = 'block';
	document.getElementById('d1').style.display = 'none';
	document.getElementById('button_next').setAttribute('onclick', 'fight()');
}

function fight() {
	document.getElementById('d2').style.display = 'none';
	document.getElementById('dialog').style.display = 'none';
	document.getElementById('game').style.display = 'block';
}

function installation_fight() {
	hp_b = 5;
	document.getElementById('hp_b').innerHTML = 'Волк: ' + hp_b + 'HP';
}

function next2() {
	document.getElementById('game').style.display = 'none';
	document.getElementById('d2').style.display = 'block';
	document.getElementById('dialog').style.display = 'block';
	document.getElementById('d2p').innerHTML = '<b>Торговец: </b>"Я шёл домой через лес и волки напали на меня."';
	document.getElementById('button_next').setAttribute('onclick', 'next3()');
}

function next3() {
	document.getElementById('d2p').innerHTML = '<b>Вы: </b>"Действительно. Ведь идти домой одному через лес ночью хорошая идея."';
	document.getElementById('button_next').setAttribute('onclick', 'next4()');
}

function next4() {
	document.getElementById('d2p').innerHTML = '<b>Торговец: </b>"Я хотел пойти по быстрому маршруту. Хорошо что всё хорошо закончилось. Спасибо, воин!"';
	document.getElementById('button_next').setAttribute('onclick', 'next5()');
}

function next5() {
	document.getElementById('d2p').innerHTML = '*Торговец ушёл.';
	document.getElementById('button_next').setAttribute('onclick', 'end()');
}

function end() {

}