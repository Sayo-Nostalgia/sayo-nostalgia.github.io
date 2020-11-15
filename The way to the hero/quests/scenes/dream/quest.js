function start_scene1() {
	document.getElementById('d1').style.display = 'none';
	document.getElementById('d2').style.display = 'block';
	document.getElementById('button_next').setAttribute('onclick', 'next()');
}

function next() {
	document.getElementById('d2p').innerHTML = 'Много лет они держали нас в плену... <br> *картинка "воин в плену"*';
	document.getElementById('button_next').setAttribute('onclick', 'next2()')
}

function next2() {
	document.getElementById('d2p').innerHTML = 'Все наши дома были разрушены... <br> *картинка "горящие, разрушеные дома"*';
	document.getElementById('button_next').setAttribute('onclick', 'next3()');
}

function next3() {
	document.getElementById('d2p').innerHTML = 'Но однажды... <br> *бежевый фон с чёрными рамками*';
	document.getElementById('button_next').setAttribute('onclick', 'next4()');
}

function next4() {
	document.getElementById('d2p').innerHTML = 'Мы устали это терпеть...';
	document.getElementById('button_next').setAttribute('onclick', 'next5()');
}

function next5() {
	document.getElementById('d2p').innerHTML = 'Мы начали сражаться *картинка "пленные сражаются"*';
	document.getElementById('button_next').setAttribute('onclick', 'next6()');
}

function next6() {
	document.getElementById('d2p').innerHTML = 'Много людей погибло...';
	document.getElementById('button_next').setAttribute('onclick', 'next7()');
}

function next7() {
	document.getElementById('d2p').innerHTML = 'Мне крайне повезло, что я выжил...';
	document.getElementById('button_next').setAttribute('onclick', 'next8()');
}

function next8() {
	document.getElementById('d2p').innerHTML = 'В городе больше никого не осталось. И мне пришлось переехать сюда.<br> *Картинка "воин один в разваленном городе"*';
	document.getElementById('button_next').setAttribute('onclick', 'next9()');
}

function next9() {
	document.getElementById('d2p').innerHTML = 'Моя цель — защитить этот город и отомстить им, тем кто издевался над нами, держал нас в плену...';
	document.getElementById('button_next').setAttribute('onclick', 'next10()');
}

function next10() {
	document.getElementById('d2p').innerHTML = '*Картинка "воин просыпается"*';
	document.getElementById('button_next').setAttribute('onclick', 'start_quest1()');
}

function start_quest1() {
	document.location.href = '../../forest/quest_1/index.html'
}

