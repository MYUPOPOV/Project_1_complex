let num = 266219;
console.log(typeof num);

let strArray = num.toString().split("");
let sum =
	strArray.reduce((sum, current) => {
		return sum * current;
	}, 1) ** 2; // jshint ignore:line

console.log(sum);
console.log(sum.toString().slice(0, 2));
