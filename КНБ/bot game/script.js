var max_rounds
var check_mr = 0
var b1_wins = 0
var b2_wins = 0

var used_r = 0
var used_p = 0
var used_s = 0

var stndof = 0
var rounds = 0

var int_speed = 100
var int = setInterval(random, int_speed)

var b1_wins_p = b1_wins / ((b1_wins + b2_wins) / 100);
var b2_wins_p = b2_wins / ((b1_wins + b2_wins) / 100);
var pause_m = 0

function speed_plus() {
	pause_m = 0;
	clearInterval(int);
	int_speed += 100;
	int = setInterval(random, int_speed);
	document.getElementById('speed').innerHTML = int_speed;
	if (int_speed == 0) {document.getElementById('speed_minus').disabled = false;}
}

function speed_minus() {
	clearInterval(int);
	int_speed -= 100;
	int = setInterval(random, int_speed);
	document.getElementById('speed').innerHTML = int_speed;

	if (int_speed < 0) {pause()}
}

function pause() {
	pause_m = 1
	document.getElementById('speed_minus').disabled = true;
	clearInterval(int);
	document.getElementById('speed').innerHTML = 'pause';
}

function random() {
	if (parseint_p_mode == 0) {
		b1_wins_p = b1_wins / ((b1_wins + b2_wins) / 100);
		b2_wins_p = b2_wins / ((b1_wins + b2_wins) / 100);
	}

	if (parseint_p_mode == 1) {
		b1_wins_p = parseInt(b1_wins / ((b1_wins + b2_wins) / 100));
		b2_wins_p = parseInt(b2_wins / ((b1_wins + b2_wins) / 100));
	}
	
	var x = ["Камень", "Ножницы", "Бумага"];
	var bot1x = Math.floor(Math.random() * 3);
	var bot1 = x[bot1x]
	var bot2x = Math.floor(Math.random() * 3);
	var bot2 = x[bot2x]

	if (bot1 == 'Камень') {
		used_r += 1;
		if (bot2 == 'Камень') {
			stndof += 1;
			used_r += 1;
		}
		if (bot2 == 'Ножницы') {
			used_s += 1;			
			b1_wins +=1;
		};
		if (bot2 == 'Бумага') {
			used_p += 1;
			b2_wins +=1;
		};
	}

	if (bot1 == 'Ножницы') {
		used_s += 1;
		if (bot2 == 'Камень') {
			used_r += 1
			b2_wins +=1;
		};
		if (bot2 == 'Ножницы') {
			stndof += 1;
			used_s += 1;

			
		}
		if (bot2 == 'Бумага') {
			used_p += 1;
			b1_wins +=1;
		};
	}

	if (bot1 == 'Бумага') {
		used_p += 1;
		if (bot2 == 'Камень') {
			used_r += 1
			b1_wins +=1;
			
		};
		if (bot2 == 'Ножницы') {
			used_s += 1;
			b2_wins +=1;
			
		};
		if (bot2 == 'Бумага') {
			stndof += 1;
			used_p += 1;
		}
		
	}

	rounds += 1;
	document.getElementById('rounds').innerHTML = 'Всего раундов: ' + rounds;


	document.getElementById('used_r').innerHTML = 'Камень: ' + used_r
	document.getElementById('used_s').innerHTML = 'Ножницы: ' + used_s
	document.getElementById('used_p').innerHTML = 'Бумага: ' + used_p
	document.getElementById('stndof').innerHTML = 'Ничья: ' + stndof
	document.getElementById('b1_wins').innerHTML = 'Бот 1: ' + b1_wins + '(' + b1_wins_p + '%)'
	document.getElementById('b2_wins').innerHTML = 'Бот 2: ' + b2_wins + '(' + b2_wins_p + '%)'



	document.getElementById('b1_choice').innerHTML = 'Бот 1: ' + bot1;
	document.getElementById('b2_choice').innerHTML = 'Бот 2: ' + bot2;

	graph()

}