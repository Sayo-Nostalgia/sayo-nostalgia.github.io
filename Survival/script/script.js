var x = 0
var y = 0

var p = document.getElementById('player')
onkeydown = function run() {
	if (event.keyCode == 68) {
			x += 10
			var px = 'px'
			p.style.left = x + px
			window.scrollBy(15,0)

	}
	if (event.keyCode == 65) {		
			x -= 10
			var px = 'px'
			p.style.left = x + px
		};
	if (event.keyCode == 87) {	
			y -= 10
			var px = 'px'
			p.style.top = y + px};
		

	if (event.keyCode == 83) {
			y += 10
			var px = 'px'
			p.style.top = y + px
			window.scrollBy(0,15)
	}
}