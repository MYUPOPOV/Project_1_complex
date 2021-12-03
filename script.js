/* Урок 6: Бот Угадай число */

let x;
let y;
let count;

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

const checkValue = (x, count) => {
	if (count > 0) {
		y = prompt("Введите число от 1 до 100");
	} else {
		endGame();
		y = "";
	}

	console.log("~ y", y);
	console.log("~ попыток:", count);

	if (isNumber(y)) {
		y = +y;
		if (y === x) {
			alert("Поздравляю!\nВы угадали загаданное число!");
			console.log("Загаданное число: " + y);
			endGame();
		} else if (y > x && y <= 100) {
			count--;
			alert("Ваше число больше X.\nПопробуйте снова\nОсталось " + count + " попыток");
			checkValue(x, count);
		} else if (y < x && y >= 1) {
			count--;
			alert("Ваше число меньше X.\nПопробуйте снова\nОсталось " + count + " попыток");
			checkValue(x, count);
		} else if (y < 1 || y > 100) {
			alert("Ваше число не от 1 до 100!");
			checkValue(x, count);
		}
	} else if (y === null) {
		alert("Всё, приехали...\nИгра окончена.");
		endGame();
	} else if (typeof y === "string") {
		if (count >= 1) {
			alert("Я же просил число!");
			checkValue(x, count);
		}
	}
};

const startGame = () => {
	x = Math.floor(Math.random() * 99) + 1;
	count = 2;
	console.log("~ x", x);
	alert("Привет! Я загадал случайное число X в интервале от 1 до 100. \nCейчас оно спрятано в логах консоли. Попробуй его отгадать.");
	checkValue(x, count);
};

const endGame = () => {
	if (confirm("Сыграем ещё?")) {
		startGame();
	} else {
		alert("Ну хорошо\nПерезагрузите страницу если захотите сыграть ещё");
	}
};

startGame();

/* Урок 5 
// Задание 1
let arr = [];

arr[0] = "123";
arr[1] = "2567";
arr[2] = "3234324";
arr[3] = "408796";
arr[4] = "53458";
arr[5] = "2379";
arr[6] = "7989";

arr.forEach((item) => {
	if (item[0] == "2" || item[0] == "4") {
		console.log(item);
	}
});

// Задание 2
nextIteration: for (i = 1; i <= 100; i++) {
	for (j = 2; j < i; j++) {
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
