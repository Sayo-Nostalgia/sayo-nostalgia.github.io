function start_quest1() {
	document.getElementById('d1').style.display = 'none';
	document.getElementById('d2').style.display = 'block';
	document.getElementById('button_next').setAttribute('onclick', 'next()');
}

function next() {
	document.getElementById('d2p').innerHTML = '<b>Воин: </b>Надо найти место, где я буду жить <br> *картинка города и сбоку воин на лошаде*';
	document.getElementById('button_next').setAttribute('onclick', 'next2()')
}

function next2() {
	document.getElementById('d2p').innerHTML = '*картинка дом и табличка "Продам дом" и сбоку воин на лошаде*';
	document.getElementById('button_next').setAttribute('onclick', 'next3()');
}

function next3() {
	document.getElementById('d2p').innerHTML = '*картинка воин покупает дом*';
	document.getElementById('button_next').setAttribute('onclick', 'next4()');
}

function next4() {
	document.getElementById('d2p').innerHTML = '*картинка воин осматривает дом*';
	document.getElementById('button_next').setAttribute('onclick', 'next5()');
}

function next5() {
	document.getElementById('d2p').innerHTML = '*картинка воин идёт тренироваться с манeкеном*';
	document.getElementById('button_next').setAttribute('onclick', 'next6()');
}

function next6() {
	document.getElementById('d2p').innerHTML = '*К вам подходит незнакомец';
	document.getElementById('button_next').setAttribute('onclick', 'train()');
}

function train() {
	document.location.href = '../tutorial/index.html'
}