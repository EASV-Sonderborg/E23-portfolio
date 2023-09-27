let zone = document.querySelectorAll(".available_zone");
let box = document.querySelector(".box");
const sound = new Audio(
	"https://assets.mixkit.co/active_storage/sfx/3005/3005-preview.mp3"
);

function boxEnter() {
	this.classList.add("dragstart");
	this.classList.add("hide");
}

function boxLeave() {
	this.classList.remove("dragstart", "hide");
}

function dragEnter(event) {
	event.preventDefault();
}

function dragOver(event) {
	event.preventDefault();
}

function dropBox() {
	this.append(box);
	sound.play();
}

box.addEventListener("dragstart", boxEnter);
box.addEventListener("dragend", boxLeave);

for (const x of zone) {
	x.addEventListener("dragenter", dragEnter);
	x.addEventListener("dragover", dragOver);
	x.addEventListener("drop", dropBox);
}