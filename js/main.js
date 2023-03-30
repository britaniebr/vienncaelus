var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// navbar Toggler

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) {
	navTogle.addEventListener ("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlink is clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
// Product Colors

var pic = document.querySelector('#main-jacket');
var black = document.querySelector('.black');
var lilac = document.querySelector('.lilac');
var pink = document.querySelector('.pink');
var purple = document.querySelector('.purple');
var teal = document.querySelector('.teal');
const colors = document.querySelectorAll('.color');
// Store Product Info In Object

var info = [
	{
		src: "images/products/black.jpeg"
	},
	{
		src: "images/products/lilac.jpeg"
	},
	{
		src: "images/products/pink.jpeg"
	},
	{
		src: "images/products/purple.jpeg"
	},
	{
		src: "images/products/teal.jpeg"
	}
]

// Change Color
black.addEventListener("click", function() {
	pic.src = info[0].src;
})
lilac.addEventListener("click", function() {
	pic.src = info[1].src;
})
pink.addEventListener("click", function() {
	pic.src = info[2].src;
})
purple.addEventListener("click", function() {
	pic.src = info[3].src;
})
teal.addEventListener("click", function() {
	pic.src = info[4].src;
})

//  active color
function color () {
	colors.forEach(c => c.classList.remove ('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));