var id_answer = document.getElementById('answer');
var id_text = document.getElementById('text');
var id_time = document.getElementById('time');
var id_restart = document.getElementById('restart');
var a;
var b;
var c;
var d;
var result;
var random;
function example() {
	id_time.innerHTML = '10';
	id_answer.disabled = true; 
	id_restart.disabled = true;
	start_int();
	a = parseInt(Math.random() * 100 + 1);
	b = parseInt(Math.random() * 100 + 1);
	c = parseInt(Math.random() * 100 + 1);
	d = parseInt(Math.random() * 100 + 1);
	random = parseInt(Math.random() * 5+1);

	if (this.random == 1) {
		id_text.innerHTML = a + '+' + b + '-' + c + '*' + d;
		result = a + b - c * d;
	}
	if (this.random == 2) {
		id_text.innerHTML = a + '*' + b + '/' + c + '-' + d;
		result = a * b / c - d;
	}
	if (this.random == 3) {
		id_text.innerHTML = a + '/' + b + '-' + c + '/' + d;
		result = a / b - c / d;
	}
	if (this.random == 4) {
		id_text.innerHTML = a + '*' + b + '*' + c + '*' + d;
		result = a * b * c * d;
	}
	if (this.random == 5) {
		id_text.innerHTML = a + '+' + b + '*' + c + '/' + d;
		result = a + b * c / d;
	}
}


function answer() {
	document.getElementById('text').innerHTML = "Ответ: " + result;
}
function start_int() {
	var time = 10;
	var int = setInterval(function(){time -=1; id_time.innerHTML = time; if (time < 1) {clearInterval(int); id_text.innerHTML = 'Время вышло!'; id_answer.disabled = false; id_restart.disabled = false;}}, 1000);
}

example(); start_int()