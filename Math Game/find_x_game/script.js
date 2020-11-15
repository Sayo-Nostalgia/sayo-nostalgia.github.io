var id_answer = document.getElementById('answer');
var id_text = document.getElementById('text');
var id_time = document.getElementById('time');
var id_restart = document.getElementById('restart');
var a;
var b;
var x;
var d;
var result;
var random;
function example() {
	id_time.innerHTML = '10';
	id_answer.disabled = true; 
	id_restart.disabled = true;
	start_int();
	a = parseInt(Math.random() * 10 + 1);
	b = parseInt(Math.random() * 10 + 1);
	x = parseInt(Math.random() * 10 + 1);
	d = parseInt(Math.random() * 10 + 1);
	random = parseInt(Math.random() * 5+1);

	if (this.random == 1) {
		result = a + b - x * d;
		id_text.innerHTML = a + '+' + b + '-' + 'x' + '*' + d + '=' + result;
	}
	if (this.random == 2) {
		result = a * b / x - d;
		id_text.innerHTML = a + '*' + b + '/' + 'x' + '-' + d + '=' + result;
	}
	if (this.random == 3) {
		result = a / b - x / d;
		id_text.innerHTML = a + '/' + b + '-' + 'x' + '/' + d + '=' + result;
	}
	if (this.random == 4) {
		result = a * b * x * d;
		id_text.innerHTML = a + '*' + b + '*' + 'x' + '*' + d + '=' + result;
	}
	if (this.random == 5) {
		result = a + b * x / d;
		id_text.innerHTML = a + '+' + b + '*' + 'x' + '/' + d + '=' + result;
	}
}


function answer() {
	document.getElementById('text').innerHTML = "x = " + x;
}
function start_int() {
	var time = 10;
	var int = setInterval(function(){time -=1; id_time.innerHTML = time; if (time < 1) {clearInterval(int); id_text.innerHTML = 'Время вышло!'; id_answer.disabled = false; id_restart.disabled = false;}}, 1000);
}

example(); start_int()