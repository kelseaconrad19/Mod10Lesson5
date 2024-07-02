//! TASK 1: You are tasked with creating a web page that dynamically updates its content based on user interaction. The page should utilize JavaScript to manipulate the document structure and content using arrays and objects.
// TODO 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
	{
		name: "Laptop",
		price: 999.99,
		description: "Powerful computing on the go",
	},
	{
		name: "Smartphone",
		price: 699.99,
		description: "Stay connected wherever you are",
	},
	{
		name: "Headphones",
		price: 149.99,
		description: "Immersive audio experience",
	},
	{
		name: "Kid's Tablet",
		price: 79.99,
		description: "Safe and fun for the little ones",
	},
];

// TODO 2: Write a function to display the product information on the webpage dynamically.
function displayProducts() {
	console.log("displayProducts function is running");
	let productContainer = document.getElementById("products");
	products.forEach((product) => {
		let productElement = document.createElement("div");
		productElement.innerHTML = `
				<h2>${product.name}</h2>
				<p>Price: $${product.price}</p>
				<p>${product.description}</p>
				`;
		productContainer.appendChild(productElement);
	});
}
// TODO 3: Implement an event listener to trigger the display of products when the page loads.
window.addEventListener("load", displayProducts);
//? TASK 2: You are tasked with creating a web page containing a form that allows users to input their information. The page should utilize JavaScript to dynamically handle form submissions, store input data in arrays and objects, and modify form behavior based on user interaction.
// TODO 1: Create an HTML form with input fields for the user's name, email, and message.
// TODO 2: Write JavaScript code to handle form submissions and store user input in an object.
function submitForm() {
	if (!validateForm()) {
		return;
	}
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;
	let user = {
		name: name,
		email: email,
		message: message,
	};
	console.log(user);
}
let form = document.getElementById("submit-button");
form.addEventListener("submit", submitForm);
// TODO 3: Implement form validation to ensure that all required fields are filled before submission.
function validateForm() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;

	if (!name || !email || !message) {
		alert("All fields are required!");
		return false;
	}

	return true;
}

//* TASK 3: You are tasked with creating a web page containing a form that allows users to input their information. The page should utilize JavaScript to dynamically handle form submissions, store input data in arrays and objects, and modify form behavior based on user interaction.
// TODO 1: Create an HTML structure with at least 5 elements that will be styled dynamically.
// TODO 2: Write JavaScript code to dynamically change the color of the box element when clicked.
let box1 = document.getElementById("dynamic-styling-1");
let box2 = document.getElementById("dynamic-styling-2");
let box3 = document.getElementById("dynamic-styling-3");
let box4 = document.getElementById("dynamic-styling-4");
let box5 = document.getElementById("dynamic-styling-5");

let boxes = [box1, box2, box3, box4, box5];

boxes.forEach((box) => {
	box.style.cursor = "pointer";
});

box1.addEventListener("click", function () {
	box1.style.backgroundColor = "red";
	box1.style.color = "white";
});

box2.addEventListener("click", function () {
	box2.style.backgroundColor = "blue";
	box2.style.color = "white";
});

box3.addEventListener("click", function () {
	box3.style.backgroundColor = "green";
	box3.style.color = "white";
});

box4.addEventListener("click", function () {
	box4.style.backgroundColor = "yellow";
	box4.style.color = "black";
});

box5.addEventListener("click", function () {
	box5.style.backgroundColor = "purple";
	box5.style.color = "white";
});
// TODO 3:  Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.

form.addEventListener("mouseenter", function () {
	form.cursor = "pointer";
	form.style.backgroundColor = "red";
	form.style.color = "white";
});

form.addEventListener("mouseleave", function () {
	form.style.backgroundColor = "white";
	form.style.color = "black";
});

let contactForm = document.getElementById("contact-form");

contactForm.style.display = "flex";
contactForm.style.flexDirection = "column";
contactForm.style.alignItems = "left";
contactForm.style.justifyContent = "center";
contactForm.style.width = "30%";
contactForm.style.gap = "10px";

let message = document.getElementById("message");

message.style.height = "100px";
