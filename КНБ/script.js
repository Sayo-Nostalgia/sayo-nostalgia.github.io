//	Камень - 1
//	Ножницы - 2
//	Бумага - 3
//	Колодец - 4

function rock() {
	var player = 1
	var bot = Math.floor((Math.random() * 4) + 1);
		if (bot == 1) {document.getElementById("demo").innerHTML = "Бот выбрал: Камень. Ничья."}
		if (bot == 2) {document.getElementById("demo").innerHTML = "Бот выбрал: Ножницы. Победа!"}
		if (bot == 3) {document.getElementById("demo").innerHTML = "Бот выбрал: Бумага. Вы проиграли :("}
		if (bot == 4) {document.getElementById("demo").innerHTML = "Бот выбрал: Колодец. Вы проиграли :("}
		}
		
function nozh() {
		var player = 2
		var bot = Math.floor((Math.random() * 4) + 1);
		    if (bot == 1) {document.getElementById("demo").innerHTML = "Бот выбрал: Камень. Вы проиграли :(."}
		    if (bot == 2) {document.getElementById("demo").innerHTML = "Бот выбрал: Ножницы. Ничья."}
		    if (bot == 3) {document.getElementById("demo").innerHTML = "Бот выбрал: Бумага. Победа!"}
		    if (bot == 4) {document.getElementById("demo").innerHTML = "Бот выбрал: Колодец. Вы проиграли :("}
		}
		
function paper() {
		var player = 3
		var bot = Math.floor((Math.random() * 4) + 1);
		    if (bot == 1) {document.getElementById("demo").innerHTML = "Бот выбрал: Камень. Победа!"}
		    if (bot == 2) {document.getElementById("demo").innerHTML = "Бот выбрал: Ножницы. Вы проиграли :("}
		    if (bot == 3) {document.getElementById("demo").innerHTML = "Бот выбрал: Бумага. Ничья."}
		    if (bot == 4) {document.getElementById("demo").innerHTML = "Бот выбрал: Колодец. Победа!"}
		}
		
function kolodec() {
		var player = 4
		var bot = Math.floor((Math.random() * 4) + 1);
		    if (bot == 1) {document.getElementById("demo").innerHTML = "Бот выбрал: Камень. Победа!"}
		    if (bot == 2) {document.getElementById("demo").innerHTML = "Бот выбрал: Ножницы. Победа!"}
		    if (bot == 3) {document.getElementById("demo").innerHTML = "Бот выбрал: Бумага. Вы проиграли :("}
		    if (bot == 4) {document.getElementById("demo").innerHTML = "Бот выбрал: Колодец. Ничья."}
		}