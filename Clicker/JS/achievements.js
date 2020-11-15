function info_ach_show() {
	document.getElementById('ach_s').style.display = 'block';
}

function info_ach_hide() {
	document.getElementById('ach_s').style.display = 'none';
}

function close_ach() {
	document.getElementById('ach_h').style.display = 'none';
}

function achievements() {
	document.getElementById('ach_h').style.display = 'block';
}

var ach1 = 0;
var ach2 = 0;


function ach_1tap() {
	if (ach1 == 0) {
		document.getElementById('ach_1tap').setAttribute('class', 'g_ach');
		achievement_new();
		ach1 = 1;
		localStorage.setItem('ach1', 1)
	}

	if (ach1 == 1) {
		document.getElementById('ach_1tap').setAttribute('class', 'g_ach');
	}
}

function ach_1lvl() {
	if (ach2 == 0) {
		document.getElementById('ach_1lvl').setAttribute('class', 'g_ach');
		achievement_new();
		ach2 = 1;
		localStorage.setItem('ach2', 1)
	}

	if (ach2 == 1) {
		document.getElementById('ach_1lvl').setAttribute('class', 'g_ach');
	}
}

function achievement_new() {
	document.getElementById('notification').style.animation = 'achievement 4s';
	setTimeout(anim_css_del, 4000)
}

function anim_css_del() {
	document.getElementById('notification').style.animation = ''
}

	if (localStorage.getItem('ach1') == 1) {
		document.getElementById('ach_1tap').setAttribute('class', 'g_ach');
	}

	if (localStorage.getItem('ach2') == 1) {
		document.getElementById('ach_1lvl').setAttribute('class', 'g_ach');
	}