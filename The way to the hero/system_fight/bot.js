var bot_dmg1 = 2
var bot_dmg2 = 3
var bot_dmg3 = 1 


function bot() {
	var random_attack = parseInt(Math.random() * 3+1)
	if (random_attack == 1) {
		hp_p -= bot_dmg1;
		document.getElementById('hp_p').innerHTML = 'Player: ' + hp_p + 'HP';
		document.getElementById('history').innerHTML += '<br> Вам нанесено 2ед. урона'
	}
	if (random_attack == 2) {
		hp_p -= bot_dmg2;
		document.getElementById('hp_p').innerHTML = 'Player: ' + hp_p + 'HP';
		document.getElementById('history').innerHTML += '<br> Вам нанесено 3ед. урона'
	}
	if (random_attack == 3) {
		hp_p -= bot_dmg3;
		document.getElementById('hp_p').innerHTML = 'Player: ' + hp_p + 'HP';
		document.getElementById('history').innerHTML += '<br> Вам нанесено 1ед. урона'
	}

	if (hp_p < 0.1) {alert('YOU LOSE :('); location.reload()}
}