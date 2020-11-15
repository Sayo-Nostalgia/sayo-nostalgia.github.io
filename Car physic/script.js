var x = 0
var y = 0
var deg = 0
var deg_r = 0
var speed = 0
onkeydown = function move() {
var car = document.getElementById('car')
	if (event.keyCode == 38) {
		speed = 50
		if (deg_r < 90) {
			x += speed
			y += deg_r
		}
		if (deg_r > 90) {
			if (deg_r < 180) {
				x -= speed
				y += deg_r
			}
		}
		if (deg_r > 270) {
			if (deg_r < 360) {
				x += speed
				y -= deg_r
			}
		}
		if (deg_r == 90) {
			x += speed
			y += deg_r
		}
		if (deg_r == 180) {
			x -= speed
			y += 0
		}
		if (deg_r > 180) {
			if (deg_r < 270) {
				x -= speed
				y -= deg_r
			}
		}
		if (deg_r == 270) {
			x -= speed
			y -= deg_r
		}
		var px = 'px'
		car.style.left = x + px 
		car.style.top = y + px 
	}
	if (event.keyCode == 40) {
		speed = 50
		if (deg_r < 90) {
			x -= speed
			y -= deg_r
		}
		if (deg_r > 90) {
			if (deg_r < 180) {
				x += speed
				y -= deg_r
			}
		}
		if (deg_r > 270) {
			if (deg_r < 360) {
				x -= speed
				y += deg_r
			}
		}
		if (deg_r == 90) {
			x -= speed
			y -= deg_r
		}
		if (deg_r == 180) {
			x += speed
			y += 0
		}
		if (deg_r == 270) {
			x += speed
			y += deg_r 
		}

		var px = 'px'
		car.style.left = x + px 
		car.style.top = y + px 
	}
	if (event.keyCode == 37) {
			if (deg_r == 360) {deg_r = 0}
		deg_r +=5
		car.style.transform = 'rotate('+ deg_r + 'deg)'
		if (deg_r < 0) {
			deg_r = 265
		}
	}
	if (event.keyCode == 39) {
			if (deg_r == -360) {deg_r = 0}
		deg_r -= 5
		car.style.transform = 'rotate('+ deg_r + 'deg)'
		if (deg_r < 0) {
			deg_r = 265
		}
	}
}

onkeyup = function low_speed() {
	speed = 0 
}