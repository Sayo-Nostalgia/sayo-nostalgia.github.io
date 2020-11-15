var parseint_p_mode = 0;
function parseint_p_on() {
	parseint_p_mode = 1;
	document.getElementById('parseint_p_off').checked = false;
} 

function parseint_p_off() {
	parseint_p_mode = 0;
	document.getElementById('parseint_p_on').checked = false;
} 