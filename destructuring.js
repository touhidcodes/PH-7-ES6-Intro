// Object Destructuring
const fish = {
	name: "king hilsha",
	address: "chadpur",
	phone: "02843875",
	price: "4000",
	color: "silver",
};

// const phone = fish.phone;
// const price = fish.price;
const { phone, color } = fish;
const { address } = fish;

console.log(phone, color);
console.log(address);

// Array Destructuring
const nayoks = ["bappa", "kingKhan", "sakib", "lion"];

const [kanda, king, queen] = nayoks;
console.log(king);
