function info_s_show() {
	document.getElementById('shop_s').style.display = 'block';
}

function info_s_hide() {
	document.getElementById('shop_s').style.display = 'none';
}


function shop() {
	document.getElementById('shop_h').style.display = 'block';
} 

function close_shop() {
	document.getElementById('shop_h').style.display = 'none';
}

// SHOP //

var shop_page = 1

function set_r_h() {
	document.getElementById('click').setAttribute('src', 'sprites/heart.png')
}

function set_b_h() {
	document.getElementById('click').setAttribute('src', 'sprites/blue_heart.png')
}

function set_g_h() {
	document.getElementById('click').setAttribute('src', 'sprites/green_heart.png')
}

function buy_y_h() {
	if (taps < 100) {
		alert('few taps')
	}
	
	if (taps > 99) {
		document.getElementById('buy_yh_b').innerHTML = 'SET';
		document.getElementById('buy_yh_b').setAttribute('onclick', 'set_y_h()');
		taps -= 100;
	}
}

function set_y_h() {
	document.getElementById('click').setAttribute('src', 'sprites/yellow_heart.png')
}

var pageid = 1
var old_pageid = pageid - 1
var page_ = 'page'
var page = page_ + pageid

function next_p() {
	if (pageid == 2) {
		return
	}
	page = page_ + pageid
	document.getElementById(page).style.display = 'none';
	pageid += 1
	page = page_ + pageid
	document.getElementById(page).style.display = 'block';
}

function prev_p() {
	if (pageid == 1) {
		return
	}

	page = page_ + pageid
	document.getElementById(page).style.display = 'none';
	pageid -= 1
	page = page_ + pageid
	document.getElementById(page).style.display = 'block';
}