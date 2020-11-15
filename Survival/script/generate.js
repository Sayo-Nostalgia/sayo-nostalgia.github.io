var x_s = parseInt(Math.random() * 1000+1)
var y_s = parseInt(Math.random() * 500+1)

var tree_id = 0
var spawn_tree_int = setInterval(spawn_tree, 60000)
function spawn_tree() {
	var tree_canvas = document.createElement('canvas')
	tree_canvas.setAttribute('width', '20px')
	tree_canvas.setAttribute('height', '20px')
	tree_id +=1
	tree_canvas.setAttribute('id', 'tree' + tree_id)
	tree_canvas.setAttribute('onclick', 'des_t_can()')
	tree_canvas.setAttribute('onmouseover', 'tree_id = this.id')
	


	tree_canvas.style.border = '1px solid black'
	tree_canvas.style.background = '#006300'
	var x_s = parseInt(Math.random() * 1000+1)
	var y_s = parseInt(Math.random() * 500+1)
	tree_canvas.style.position = 'absolute'
	tree_canvas.style.right = x_s + 'px'
	tree_canvas.style.top = y_s + 'px'
	document.body.appendChild(tree_canvas)
}

spawn_tree()
spawn_tree()
spawn_tree()
spawn_tree()
spawn_tree()
spawn_tree()
spawn_tree()
spawn_tree()
spawn_tree()