

var plank_q = 0

function craft_plank() {
	if (tree_q > 0) {
		if (plank_q < 1) {
			var plank_p = document.createElement('BUTTON')
			plank_p.setAttribute('id', 'planks')
			var plank_p_t = document.createTextNode('Planks: ')
			plank_p.setAttribute('onclick', 'block_plank()')
			plank_p.appendChild(plank_p_t)
			document.getElementById('invertory').appendChild(plank_p)
			var br_p = document.createElement('BR')
			br_p.setAttribute('id', 'br_p')
			document.getElementById('invertory').appendChild(br_p)
		}
		plank_q += 8
		tree_q -= 1
		document.getElementById('planks').innerHTML = 'Planks: ' + plank_q
		document.getElementById('tree_q').innerHTML = 'Tree: ' + tree_q
	}
	if (tree_q < 1) {
		document.getElementById('tree_q').parentNode.removeChild(document.getElementById('tree_q'))
		document.getElementById('br_t').parentNode.removeChild(document.getElementById('br_t'))
	}
}

var wooden_wall_q = 0

function craft_woodenwall() {
	if (plank_q > 9) {
		if (wooden_wall_q < 1) {
			var wooden_wall_p = document.createElement('BUTTON')
			wooden_wall_p.setAttribute('id', 'woodenwall')
			wooden_wall_p.setAttribute('onclick', 'b_mode_woodenwall()')
			var wooden_wall_p_t = document.createTextNode('Planks: ')
			wooden_wall_p.appendChild(wooden_wall_p_t)
			document.getElementById('invertory').appendChild(wooden_wall_p)
			var br_ww = document.createElement('BR')
			br_ww.setAttribute('id', 'br_ww')
			document.getElementById('invertory').appendChild(br_ww)
		}
		wooden_wall_q += 8
		plank_q -= 10
		document.getElementById('planks').innerHTML = 'Planks: ' + plank_q
		document.getElementById('woodenwall').innerHTML = 'Wooden wall: ' + wooden_wall_q
	}
	if (plank_q < 1) {
		document.getElementById('planks').parentNode.removeChild(document.getElementById('planks'))
		document.getElementById('br_p').parentNode.removeChild(document.getElementById('br_p'))
	}
}