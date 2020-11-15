function start_tutorial() {
	document.getElementById('d1').style.display = 'none';
	document.getElementById('button_1').disabled = true;
	document.getElementById('button_3').disabled = true;
	document.getElementById('d2').style.display = 'block';
	document.getElementById('game').style.display = 'block'; 
}

var dialog_3 = 0

function attack_2() {
	hp_b -= sum2;
	combo += '2-'
	if (hp_b < 0.1) {alert('YOU WIN!!!'); location.reload()};
	document.getElementById('hp_b').innerHTML = 'Bot: ' + hp_b + 'HP';
	document.getElementById('history').innerHTML += '<br> Вы нанесли врагу ' + sum2 + 'ед. урона.';
	bot();

	dialog_3 += 1;
	if (dialog_3 == 1) {
		document.getElementById('d2p').innerHTML = '<b>Незнакомец: </b>Ты нанёс противнику 3 ед. урона. Но противник тоже не стоит на месте и наносит тебе урон!<br>';
		document.getElementById('button_2').disabled = true;
		document.getElementById('button_next').style.display = 'block';
		document.getElementById('button_next').innerHTML = 'Далее';
		document.getElementById('button_next').setAttribute('onclick', 'next1()') ;
	}
}

function next1() {
	document.getElementById('d2p').innerHTML = '<b>Незнакомец: </b>У каждого есть особая атака. У тебя особая атака — ' + combo_r + ".";
	document.getElementById('button_next').setAttribute('onclick', 'next2()');
}

function next2() {
	document.getElementById('d2p').innerHTML = '<b>Незнакомец: </b>То есть, ты должен сначала нажать на "2", потом на "1" и на "3".';
	document.getElementById('button_next').setAttribute('onclick', 'next3()');
}

function next3() {
	document.getElementById('d2p').innerHTML = '<b>Незнакомец: </b>Так как на "2" ты уже нажал, тебе осталось нажать на "1", а после на "3".';
	document.getElementById('button_1').disabled = false;
	document.getElementById('button_next').style.display = 'none';
	document.getElementById('button_1').setAttribute('onclick', 'display_attack_3()')
}

function display_attack_3() {
	hp_b -= sum1;
	combo += '1-'
	if (hp_b < 0.1) {alert('YOU WIN!!!'); location.reload()};
	document.getElementById('hp_b').innerHTML = 'Bot: ' + hp_b + 'HP';
	document.getElementById('history').innerHTML += '<br> Вы нанесли врагу ' + sum1 + 'ед. урона'
	bot()

	document.getElementById('button_1').disabled = true;
	document.getElementById('button_3').disabled = false;
	document.getElementById('button_3').setAttribute('onclick', 'next4()');
}

function next4() {
	hp_b -= sum3;
	combo += '3-'
	if (hp_b < 0.1) {alert('YOU WIN!!!'); location.reload()};
	if (combo == combo_r) {hp_b -=5; combo = ''; document.getElementById('history').innerHTML += '<br> Вы нанесли врагу ' + 5 + 'ед. урона(Особая атака)'}
	document.getElementById('hp_b').innerHTML = 'Bot: ' + hp_b + 'HP';
	document.getElementById('history').innerHTML += '<br> Вы нанесли врагу ' + sum3 + 'ед. урона'
	bot()

	document.getElementById('d2p').innerHTML = '<b>Незнакомец: </b>Отлично, ты использовал особую атаку';
	document.getElementById('button_3').disabled = true
	document.getElementById('button_next').style.display = 'block';
	document.getElementById('button_next').setAttribute('onclick', 'next5()');

}

function next5() {
	document.getElementById('d2p').innerHTML = '<b>Незнакомец: </b>Ты можешь посмотреть всю историю боя, посмотри ниже.';
	document.getElementById('button_next').setAttribute('onclick', 'next6()');
}

function next6() {
	document.getElementById('d2p').innerHTML = '<b>Незнакомец: </b>Поздравляю! Теперь ты готов к новым боям и подвигам! Кстати, меня Эдл зовут. Мы ещё встретимся, удачи!';
	document.getElementById('button_next').setAttribute('onclick', 'end_tutorial()');
	document.getElementById('button_next').innerHTML = 'Завершить обучение.'
}

function end_tutorial() {
	document.location.href = '../scenes/dream/index.html'
}