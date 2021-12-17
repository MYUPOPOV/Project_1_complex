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
	// console.log("~ dayOfWeek:", dayOfWeek);
	// В переменную dayOfWeek записываем день недели ~

	const dayOfMonth = date.getDate(); // сегодняшнее число
	// console.log("~ dayOfMonth", dayOfMonth);

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
	// console.log("~ month", month);
	// В переменную month записываем текущий месяц ~

	const year = date.getFullYear(); // сегодняшнее число
	// console.log("~ year", year);

	const hour = date.getHours(); // текущий час
	const hourDecl = hourDeclension(hour);
	// console.log("~ hour", hour);
	// console.log("~ hourDeclension", hourDecl);

	const minutes = date.getMinutes(); // текущая минута
	// console.log("~ minutes", minutes);
	const minutesDecl = minutesDeclension(minutes);
	// console.log("~ minutesDecl", minutesDecl);

	const secunds = date.getSeconds(); // текущая минута
	// console.log("~ secunds", secunds);
	const secundsDecl = secundsDeclension(secunds);
	// console.log("~ secundsDecl", secundsDecl);

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
	stringA.innerHTML = "<i>" + Now[0] + "</i>";
	// stringB.innerHTML = Now[1];
};

// Запускаем :)
let timerId = setInterval(renderTime, 1000);
