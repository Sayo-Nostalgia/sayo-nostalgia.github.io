var num1 = document.getElementById("num1").innerHTML = parseInt(Math.random() * 10+1);
var num2 = document.getElementById("num2").innerHTML = parseInt(Math.random() * 10+1); 

function equally() {
	if (this.num1 == this.num2) {document.getElementById("text").innerHTML = "Good!";};
	if (this.num1 > this.num2) {document.getElementById("text").innerHTML = "No!";};
	if (this.num1 < this.num2) {document.getElementById("text").innerHTML = "No!"; };
}
function plus() {
	if (this.num1 == this.num2) {document.getElementById("text").innerHTML = "No!"; };
	if (this.num1 > this.num2) {document.getElementById("text").innerHTML = "Good!"; }
	if (this.num1 < this.num2) {document.getElementById("text").innerHTML = "No!";};
}

function minus () {
	if (this.num1 < this.num2) {document.getElementById("text").innerHTML = "Good!"; };
	if (this.num1 > this.num2) {document.getElementById("text").innerHTML = "No!"; };
	if (this.num1 == this.num2) {document.getElementById("text").innerHTML = "No!"; };

}
