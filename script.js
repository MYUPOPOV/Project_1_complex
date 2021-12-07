/* Урок 8. Выводит текущей даты и времени */
let Now;
const stringA = document.querySelector(".string_a");
const stringB = document.querySelector(".string_b");

/* Склоняем слово "час" */
const hourDeclension = (hour) => {
	if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 23)) {
		return "часа";
	}
	if ((hour >= 5 && hour <= 20) || hour === 0) {
		return "часов";
	}
	if (hour === 1 || hour === 21) {
		return "час";
	}
};

/* Склоняем слово "минута" */
const minutesDeclension = (minutes) => {
	if (minutes === 1 || minutes === 21 || minutes === 31 || minutes === 41 || minutes === 51) {
		return "минута";
	}
	if (
		(minutes >= 2 && minutes <= 4) ||
		(minutes >= 22 && minutes <= 24) ||
		(minutes >= 32 && minutes <= 34) ||
		(minutes >= 42 && minutes <= 44) ||
		(minutes >= 52 && minutes <= 54)
	) {
		return "минуты";
	}

	if (
		minutes === 0 ||
		(minutes >= 5 && minutes <= 20) ||
		(minutes >= 25 && minutes <= 30) ||
		(minutes >= 35 && minutes <= 40) ||
		(minutes >= 45 && minutes <= 50) ||
		(minutes >= 55 && minutes <= 60)
	) {
		return "минут";
	}
};
/* Склоняем слово "минута" ~ */

/* Склоняем слово "секунда" */
const secundsDeclension = (secunds) => {
	if (secunds === 1 || secunds === 21 || secunds === 31 || secunds === 41 || secunds === 51) {
		return "секунда";
	}
	if (
		(secunds >= 2 && secunds <= 4) ||
		(secunds >= 22 && secunds <= 24) ||
		(secunds >= 32 && secunds <= 34) ||
		(secunds >= 42 && secunds <= 44) ||
		(secunds >= 52 && secunds <= 54)
	) {
		return "секунды";
	}
	if (
		secunds === 0 ||
		(secunds >= 5 && secunds <= 20) ||
		(secunds >= 25 && secunds <= 30) ||
		(secunds >= 35 && secunds <= 40) ||
		(secunds >= 45 && secunds <= 50) ||
		(secunds >= 55 && secunds <= 60)
	) {
		return "секунд";
	}
};
/* Склоняем слово "секунда" ~ */

/* Форматируем отображение духзначных чисел */
const timeFormat = (value) => {
	let str = String(value);
	if (str.length == 1) {
		str = "0" + str;
	}
	return str;
};

/* Получаем все компоненты текущей даты и времени. return: array[string1, string2] */
const getTime = () => {
	const date = new Date();
	// const date = new Date(2021, 11, 7, 13, 21, 5);

	// В переменную dayOfWeek записываем день недели
	let dayOfWeek;
	switch (date.getDay()) {
		case 0:
			dayOfWeek = "Воскресенье";
			break;
		case 1:
			dayOfWeek = "Понедельник";
			break;
		case 2:
			dayOfWeek = "Вторник";
			break;
		case 3:
			dayOfWeek = "Среда";
			break;
		case 4:
			dayOfWeek = "Четверг";
			break;
		case 5:
			dayOfWeek = "Пятница";
			break;
		case 6:
			dayOfWeek = "Суббота";
			break;
	}
	console.log("~ dayOfWeek:", dayOfWeek);
	// В переменную dayOfWeek записываем день недели ~

	const dayOfMonth = date.getDate(); // сегодняшнее число
	console.log("~ dayOfMonth", dayOfMonth);

	// В переменную month записываем текущий месяц
	let month;
	switch (date.getMonth()) {
		case 0:
			month = "января";
			break;
		case 1:
			month = "февраля";
			break;
		case 2:
			month = "марта";
			break;
		case 3:
			month = "апреля";
			break;
		case 4:
			month = "мая";
			break;
		case 5:
			month = "июня";
			break;
		case 6:
			month = "июля";
			break;
		case 7:
			month = "августа";
			break;
		case 8:
			month = "сентября";
			break;
		case 9:
			month = "октября";
			break;
		case 10:
			month = "ноября";
			break;
		case 11:
			month = "декабря";
			break;
	}
	console.log("~ month", month);
	// В переменную month записываем текущий месяц ~

	const year = date.getFullYear(); // сегодняшнее число
	console.log("~ year", year);

	const hour = date.getHours(); // текущий час
	const hourDecl = hourDeclension(hour);
	console.log("~ hour", hour);
	console.log("~ hourDeclension", hourDecl);

	const minutes = date.getMinutes(); // текущая минута
	console.log("~ minutes", minutes);
	const minutesDecl = minutesDeclension(minutes);
	console.log("~ minutesDecl", minutesDecl);

	const secunds = date.getSeconds(); // текущая минута
	console.log("~ secunds", secunds);
	const secundsDecl = secundsDeclension(secunds);
	console.log("~ secundsDecl", secundsDecl);

	// Отформатированные переменные для string2
	const dayOfMonthFormat = timeFormat(dayOfMonth);
	const monthFormat = timeFormat(date.getMonth() + 1);
	const hourFormat = timeFormat(hour);
	const minutesFormat = timeFormat(minutes);
	const secundsFormat = timeFormat(secunds);

	const string1 =
		"Сегодня " +
		dayOfWeek +
		", " +
		dayOfMonth +
		" " +
		month +
		" " +
		year +
		" года, " +
		hour +
		" " +
		hourDecl +
		" " +
		minutes +
		" " +
		minutesDecl +
		" " +
		secunds +
		" " +
		secundsDecl;
	const string2 = dayOfMonthFormat + "." + monthFormat + "." + year + " - " + hourFormat + ":" + minutesFormat + ":" + secundsFormat;

	return [string1, string2];
};

/* Отрисовываем время */
const renderTime = () => {
	getTime();
	Now = getTime();
	stringA.innerHTML = Now[0];
	stringB.innerHTML = Now[1];
};

// Запускаем :)
let timerId = setInterval(renderTime, 1000);

/* Урок 7. Дни недели */
// let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// const weekHTML = document.querySelector(".week");

// week.forEach((item, index) => {
// 	const daySpan = document.createElement("div");
// 	const today = new Date();
// 	let dayIndex = today.getDay();
// 	if (dayIndex === 0) {
// 		dayIndex = 7;
// 	}

// 	daySpan.innerHTML = item + " ";
// 	if (index === dayIndex - 1) {
// 		daySpan.innerHTML = "<b>" + daySpan.innerHTML + "</b>";
// 	}
// 	if (index === 5 || index === 6) {
// 		daySpan.innerHTML = "<i>" + daySpan.innerHTML + "</i>";
// 	}
// 	weekHTML.append(daySpan);
// });

/* Урок 6: Бот Угадай число

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
