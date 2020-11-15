function start_scene1() {
	document.getElementById('d1').style.display = 'none';
	document.getElementById('d2').style.display = 'block';
	document.getElementById('button_next').setAttribute('onclick', 'next()');
}

function next() {
	document.getElementById('d2p').innerHTML = '...Так же победителя ждёт приз. Воинам — доспехи и меч. Магам — новые зелья. Стрелкам — лук и стрелы.';
	document.getElementById('button_next').setAttribute('onclick', 'next2()')
}

function next2() {
	document.getElementById('d2p').innerHTML = '*Вы решили поучаствовать на арене.';
	document.getElementById('button_next').setAttribute('onclick', 'next3()');
}

function start_quest1() {
	document.location.href = '../../forest/quest_1/index.html'
}

