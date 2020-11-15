function graph() {
	document.getElementById('red_g').width = parseInt(b1_wins / ((b1_wins + b2_wins) / 100)) + 100; + 'px';
	document.getElementById('blue_g').width = parseInt(b2_wins / ((b1_wins + b2_wins) / 100)) + 100; + 'px';
}