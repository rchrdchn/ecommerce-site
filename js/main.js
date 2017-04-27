// creating allTees array
var allTees = new Array;

// creating one object with 4 properties using constructor notation
// pushing all new Tees to allTees array
function Tees(model, sizes, price, image) {
	this.model = model,
	this.sizes = sizes,
	this.price = price,
	this.image = image,
	allTees.push(this) // pushing new Tees to allTees array
}

// creating nine objects
var shirt1 = new Tees("shirt1", "Small, Medium", 24.95, "images/tshirt.png");
var shirt2 = new Tees("shirt2", "Small, Medium", 19.95, "images/tshirt.png");
var shirt3 = new Tees("shirt3", "Small, Medium", 30, "images/tshirt.png");
var shirt4 = new Tees("shirt4", "Small, Medium", 16.95, "images/tshirt.png");
var shirt5 = new Tees("shirt5", "Small", 24.95, "images/tshirt.png");
var shirt6 = new Tees("shirt6", "Medium", 19.95, "images/tshirt.png");
var shirt7 = new Tees("shirt7", "Small, Medium", 24.95, "images/tshirt.png");
var shirt8 = new Tees("shirt8", "Small, Medium", 16.95, "images/tshirt.png");
var shirt9 = new Tees("shirt9", "Medium", 19.95, "images/tshirt.png");


for (i = 0; i < allTees.length; i++) {
	var bigDiv = document.createElement("div"),
		smallDiv = document.createElement("div"),
		image = document.createElement("img"),
		model = document.createElement("h3"),
		size = document.createElement("h4"),
		price = document.createElement("h4"),
		button = document.createElement("button");

	// 
	image.src = allTees[i].image;
	model.innerHTML = allTees[i].model;
	size.innerHTML = "Size: " + allTees[i].sizes;
	price.innerHTML = "Price: " + allTees[i].price;
	button.innerHTML = "Buy Now!";

	// 
	bigDiv.className = "col-md-4 bigDiv";
	button.className = "btn btn-success";

	// appending to smallDiv and bigDiv
	smallDiv.appendChild(image);
	bigDiv.appendChild(smallDiv);
	bigDiv.appendChild(model);
	bigDiv.appendChild(size);
	bigDiv.appendChild(price);
	bigDiv.appendChild(button);

	// appending bigDiv to products div
	document.getElementById("products").appendChild(bigDiv);
}













