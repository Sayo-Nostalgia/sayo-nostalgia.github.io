function km_h() {
	document.getElementById('m_min').value = document.getElementById('km_h').value * 1000 / 60;
	document.getElementById('m_sec').value = document.getElementById('km_h').value * 1000 / 3600;
}

function m_m() {
	document.getElementById('km_h').value = document.getElementById('m_min').value / 1000 * 60;
	document.getElementById('m_sec').value = document.getElementById('m_min').value / 60;
}

function m_s() {
	document.getElementById('km_h').value = document.getElementById('m_sec').value / 1000 * 3600;
	document.getElementById('m_min').value = document.getElementById('m_sec').value * 60
}