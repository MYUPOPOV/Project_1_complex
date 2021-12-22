/* Урок 19. Вывод текущей даты и времени */
let Now;
const stringA = document.querySelector(".string_a");
const stringB = document.querySelector(".string_b");
const stringC = document.querySelector(".string_c");
const stringD = document.querySelector(".string_d");

/* Склоняем слова: "час" / "минута" и "секунда" */
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
const declensionItems = (item, word) => {
	if (item === 1 || item === 21 || item === 31 || item === 41 || item === 51) {
		return word + "а";
	}
	if ((item >= 2 && item <= 4) || (item >= 22 && item <= 24) || (item >= 32 && item <= 34) || (item >= 42 && item <= 44) || (item >= 52 && item <= 54)) {
		return word + "ы";
	}

	if (item === 0 || (item >= 5 && item <= 20) || (item >= 25 && item <= 30) || (item >= 35 && item <= 40) || (item >= 45 && item <= 50) || (item >= 55 && item <= 60)) {
		return word;
	}
};

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

	const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	let dayOfWeek = week[date.getDay()]; // день недели
	const dayOfMonth = date.getDate(); // сегодняшнее число
	const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
	let month = months[date.getMonth()]; // текущий месяц
	const year = date.getFullYear(); // сегодняшний год
	const hour = date.getHours(); // текущий час
	const minutes = date.getMinutes(); // текущая минута
	const secunds = date.getSeconds(); // текущая минута
	/* 	Склоняем часы, минуты, секунды:  */
	const hourDecl = hourDeclension(hour);
	const minutesDecl = declensionItems(minutes, "минут");
	const secundsDecl = declensionItems(secunds, "секунд");
	/* 	Отформатированные переменные:  */
	const dayOfMonthFormat = timeFormat(dayOfMonth);
	const monthFormat = timeFormat(date.getMonth() + 1);
	let hourFormat = timeFormat(hour);
	const minutesFormat = timeFormat(minutes);
	const secundsFormat = timeFormat(secunds);

	let string1; // Время дня)
	if (hour >= 4 && hour < 12) {
		string1 = "Доброе утро!";
	} else if (hour >= 12 && hour < 17) {
		string1 = "Добрый день!";
	} else if (hour >= 17 && hour < 24) {
		string1 = "Добрый вечер!";
	} else if (hour >= 0 && hour < 4) {
		string1 = "Доброй ночи!";
	}

	const string2 = `Сегодня: ${dayOfWeek}, ${dayOfMonth} ${month} ${year} года`; // День недели и дата
	let timeId = "AM";
	if (hour > 12) {
		timeId = "PM";
		hourFormat = timeFormat(hour - 12);
	}

	const string3 = `Текущее время: ${hourFormat}:${minutesFormat}:${secundsFormat} ${timeId} (${hour} ${hourDecl} ${minutes} ${minutesDecl} и ${secunds} ${secundsDecl})`; // Время

	let dateStop = new Date(`${year + 1}`).getTime();
	let dateNow = new Date().getTime();
	let days = Math.floor((dateStop - dateNow) / (3600000 * 24));
	const string4 = `До Нового года осталось ${days} дней`;

	return [string1, string2, string3, string4];
};

/* Отрисовываем время */
const renderTime = () => {
	getTime();
	timeArray = getTime();
	stringA.innerHTML = "<i>" + timeArray[0] + "</i>";
	stringB.innerHTML = "<i>" + timeArray[1] + "</i>";
	stringC.innerHTML = "<i>" + timeArray[2] + "</i>";
	stringD.innerHTML = "<i>" + timeArray[3] + "</i>";
};

// Запускаем :)
let timerId = setInterval(renderTime, 1000);
