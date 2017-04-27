// 1) Create three objects with four properties using object literal notation. What is an "object literal"?

// var person1 = {
// 	firstName: "rich",
// 	lastName: "chan",
// 	location: "san francisco",
// 	phone: "nexus"
// 	}

// var person2 = {
// 	firstName: "rich",
// 	lastName: "chan",
// 	location: "san francisco",
// 	phone: "nexus"	
// }

// var person3	= {
// 	firstName: "rich",
// 	lastName: "chan",
// 	location: "san francisco",
// 	phone: "nexus"
// }

// 2) Create the same three objects, with the same four properties, using a constructor function instead.

// function familyMembers(firstName, lastName, location, phone) {
// 	this.firstName = firstName,
// 	this.lastName = lastName,
// 	this.location = location,
// 	this.phone = phone
// }

// 3) Using a constructor function, create an object with a method. Have that method multiply two numbers and return the product.

// function FamilyMembers(firstName, lastName, location, phone) {
// 	this.firstName = firstName,
// 	this.lastName = lastName,
// 	this.location = location,
// 	this.phone = phone
// }

// var rich = new FamilyMembers("rich", "chan", "sf", "iphone");
// var anthony = new FamilyMembers("anthone", "jose", "cali", "nexus");

// for (i = 0; i < FamilyMembers.length; i++) {
// 	console.log(i);
// }

// var adidas = {
// 	model: "predator",
// 	price: 90,
// 	quantity: 12,
// 	revenue: function() {
// 		return this.price * this.quantity;
// 	}
// }

// var nike = {
// 	model: "mercurial",
// 	price: 95,
// 	quantity: 10,
// 	revenue: function() {
// 		return this.price * this.quantity;
// 	}
// }

// var puma = {
// 	model: "king",
// 	price: 80,
// 	quantity: 15,
// 	revenue: function() {
// 		return this.price * this.quantity;
// 	}
// }

// var shoes = [adidas, nike, puma];

// for (i = 0; i < shoes.length; i++) {
// 	console.log(shoes[i].revenue());
// }

var arrayShoes = [];

function Shoes(model, price, quantity) {
	this.model = model,
	this.price = price,
	this.quantity = quantity,
	this.revenue = function() {
		return (this.price * this.quantity);
	}
	arrayShoes.push(this);
}

var adidas = new Shoes("predator", 90, 12);
var nike = new Shoes("mercurial", 95, 10);
var puma = new Shoes("king", 80, 15);

for (i = 0; i < arrayShoes.length; i++) {
	console.log(arrayShoes[i].revenue());
}











