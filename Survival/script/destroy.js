var tree_q = 0
		var hp_t_can = 4
	function des_t_can() {
		hp_t_can -= 1
			if (hp_t_can < 1) {
					if (tree_q < 1) {
				var tree_p = document.createElement('BUTTON')
				var tree_p_t = document.createTextNode('Tree: ')
				tree_p.setAttribute('id', 'tree_q')
				tree_p.appendChild(tree_p_t)
				document.getElementById('invertory').appendChild(tree_p)
				var br_t = document.createElement('BR')
				br_t.setAttribute('id', 'br_t')
				document.getElementById('invertory').appendChild(br_t)
			}
				tree_q += 5;
				document.getElementById(this.tree_id).parentNode.removeChild(document.getElementById(this.tree_id));
				hp_t_can = 4;
				document.getElementById('tree_q').innerHTML = 'Tree: ' + tree_q
			}
		}
var hp_ww_can = 4
	function des_ww_can() {
		hp_ww_can -= 1
			if (hp_ww_can < 1) {
					if (wooden_wall_q < 1) {
				var ww_p = document.createElement('BUTTON')
				var ww_p_t = document.createTextNode('Wooden wall: ')
				ww_p.setAttribute('id', 'woodenwall')
				ww_p.appendChild(ww_p_t)
				document.getElementById('invertory').appendChild(ww_p)
				var ww_t = document.createElement('BR')
				ww_t.setAttribute('id', 'br_ww')
				document.getElementById('invertory').appendChild(ww_t)
			}
				wooden_wall_q += 1;
				document.getElementById(this.ww_id).parentNode.removeChild(document.getElementById(this.ww_id));
				hp_ww_can = 4;
				document.getElementById('woodenwall').innerHTML = 'Wooden wall: ' + wooden_wall_q
			}
		}