/* function add(num1, num2) {
	// 	if (num2 === undefined) {
	// 	num2 = 0;
	// }

	// second = second || 0;

	const total = num1 + num2;
	return total;
} */

// ES6
function add(num1 = 0, num2 = 0) {
	const total = num1 + num2;
	return total;
}

console.log(add(2));
