/* Урок 5 */
// Задание 1
let arr = [];

arr[0] = "firstNumber";
arr[1] = "2ndNumber";
arr[2] = "3dNumber";
arr[3] = "4thNumber";
arr[4] = "5thNumber";
arr[5] = "sixthNumber";
arr[6] = "7thNumber";

arr.forEach((item) => {
	if (item[0] == "2" || item[0] == "4") {
		console.log(item);
	}
});

// Задание 2
nextIteration: for (i = 1; i <= 100; i++) {
	for (j = 2; j < i ** (1 / 2); j++) {
		if (i % j == 0) {
			continue nextIteration;
		}
	}
	console.log(i + " - простое число. Делители этого числа: 1 и " + i);
}

/* Урок 4 
const strReduce = (str) => {
	if (typeof str !== "string") {
		return "Передана не строка!";
	} else if (str.trim().length > 30) {
		return str.trim().slice(0, 30) + "...";
	} else {
		return str.trim();
	}
};

console.log(strReduce(prompt("Введите произвольный аргумент", "Строка")));

// console.log(strReduce(arg));

/* Урок 3 
// Задача 1
const lang = prompt("Введите язык: ru/en", "ru"); // Также есть button на странице

if (lang === "ru") {
	console.log("IF: Пн Вт Ср Чт Пт Сб Вс");
} else if (lang === "en") {
	console.log("IF: Mo Tu We Th Fr Sa Su");
}

switch (lang) {
	case "ru":
		console.log("SWITCH: Пн Вт Ср Чт Пт Сб Вс");
		break;
	case "en":
		console.log("SWITCH: Mo Tu We Th Fr Sa Su");
		break;
}

const Array = [
	["ru", "ARRAY: Пн Вт Ср Чт Пт Сб Вс"],
	["en", "ARRAY: Mo Tu We Th Fr Sa Su"],
];
console.log(Array.find((item) => item[0] === lang)[1]);

// Решил добавить больше интерактива
const btnLangRu = document.querySelector(".lesson03_ru");
const btnLangEn = document.querySelector(".lesson03_en");

const isToday = (lang) => {
	const today = new Date();

	if (lang === "ru") {
		switch (today.getDay()) {
			case 0:
				console.log("Сегодня воскресенье");
				break;
			case 1:
				console.log("Сегодня понедельник");
				break;
			case 2:
				console.log("Сегодня вторник");
				break;
			case 3:
				console.log("Сегодня среда");
				break;
			case 4:
				console.log("Сегодня четверг");
				break;
			case 5:
				console.log("Сегодня пятница");
				break;
			case 6:
				console.log("Сегодня суббота");
				break;
		}
	}

	if (lang === "en") {
		switch (today.getDay()) {
			case 0:
				console.log("Today is Sunday");
				break;
			case 1:
				console.log("Today is Monday");
				break;
			case 2:
				console.log("Today is Tuesday");
				break;
			case 3:
				console.log("Today is Wednesday");
				break;
			case 4:
				console.log("Today is Thursday");
				break;
			case 5:
				console.log("Today is Friday");
				break;
			case 6:
				console.log("Today is Saturday");
				break;
		}
	}
};

btnLangRu.addEventListener("click", () => {
	isToday("ru");
});
btnLangEn.addEventListener("click", () => {
	isToday("en");
});

//
const namePerson = prompt("Укажите имя: Артем/Александр/другое", "Артем");
namePerson === "Артем"
	? console.log("директор")
	: namePerson === "Александр"
	? console.log("преподаватель")
	: console.log("студент");
  */

/* Урок 2
let num = 266219;
console.log(typeof num);

let strArray = num.toString().split("");
let sum =
	strArray.reduce((sum, current) => {
		return sum * current;
	}, 1) ** 3; // jshint ignore:line

console.log(sum);
console.log(sum.toString().slice(0, 2));
 */
