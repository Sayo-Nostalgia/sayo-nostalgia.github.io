var build_mode_block = 0
function b_mode_woodenwall() {
	build_mode_block = '1'	
}

var ww_id = 0
window.oncontextmenu = function build(){
	if (build_mode_block == '1') {
		if (wooden_wall_q > 0) {
			var wooden_wall_canvas = document.createElement('canvas')
			wooden_wall_canvas.setAttribute('width', '20px')
			wooden_wall_canvas.setAttribute('height', '20px')
			ww_id +=1
			wooden_wall_canvas.setAttribute('id', 'ww' + ww_id)
			wooden_wall_canvas.setAttribute('onclick', 'des_ww_can()')
			wooden_wall_canvas.setAttribute('onmouseover', 'ww_id = this.id')
			wooden_wall_canvas.style.border = '1px solid black'
			wooden_wall_canvas.style.background = 'rgb(123, 226, 123)'
			var x_ww = event.clientX
			var y_ww = event.clientY
			wooden_wall_canvas.style.position = 'absolute'
			wooden_wall_canvas.style.left = x_ww + 'px'
			wooden_wall_canvas.style.top = y_ww + 'px'
			document.body.appendChild(wooden_wall_canvas)

			wooden_wall_q -= 1
			document.getElementById('woodenwall').innerHTML = 'Wooden wall: ' + wooden_wall_q
		}

		if (wooden_wall_q < 1) {
			document.getElementById('woodenwall').parentNode.removeChild(document.getElementById('woodenwall'))
			document.getElementById('br_ww').parentNode.removeChild(document.getElementById('br_ww'))
		}
	
	}
return false
}
