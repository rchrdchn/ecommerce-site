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
var shirt1 = new Tees("Uniqlo", "Small, Medium", 24.95, "images/tshirt.png");
var shirt2 = new Tees("Everlane", "Small, Medium", 19.95, "images/tshirt.png");
var shirt3 = new Tees("Soulland", "Small, Medium", 30, "images/tshirt.png");
var shirt4 = new Tees("APC", "Small, Medium", 16.95, "images/tshirt.png");
var shirt5 = new Tees("Ad-lib", "Small", 24.95, "images/tshirt.png");
var shirt6 = new Tees("Polo", "Medium", 19.95, "images/tshirt.png");
var shirt7 = new Tees("Zara", "Small, Medium", 24.95, "images/tshirt.png");
var shirt8 = new Tees("Adidas Originals", "Small, Medium", 16.95, "images/tshirt.png");
var shirt9 = new Tees("Levi's", "Medium", 19.95, "images/tshirt.png");


for (i = 0; i < allTees.length; i++) {
	var bigDiv = document.createElement("div"),
		smallDiv = document.createElement("div"),
		image = document.createElement("img"),
		model = document.createElement("h3"),
		size = document.createElement("ul"),
		sizeSmall = document.createElement("li"),
		sizeMedium = document.createElement("li"),
		sizeBig = document.createElement("li"),
		price = document.createElement("h4"),er
		button = document.createElement("button");

	// 
	image.src = allTees[i].image;
	model.innerHTML = allTees[i].model;
	size.innerHTML = "Size";
	sizeSmall.innerHTML = "Small";
	sizeMedium.innerHTML = "Medium";
	sizeBig.innerHTML = "Big";
	price.innerHTML = "Price: " + allTees[i].price;
	button.innerHTML = "Add to Cart";

	// 
	size.className = "dropdown-menu"
	bigDiv.className = "col-md-4 bigDiv";
	button.className = "btn btn-success";

	// appending to smallDiv and bigDiv
	size.appendChild(sizeSmall);
	size.appendChild(sizeMedium);
	size.appendChild(sizeBig);
	smallDiv.appendChild(image);
	bigDiv.appendChild(smallDiv);
	bigDiv.appendChild(model);
	bigDiv.appendChild(size);
	bigDiv.appendChild(price);
	bigDiv.appendChild(button);

	// appending bigDiv to products div
	document.getElementById("products").appendChild(bigDiv);
}













