// date constants

const LOTR_MONTHS = ["Yestarë", "Narwain", "Nínui", "Gwaeron", "Gwirith", "Lothron", "Nórui", "Loëndë", "Cerveth", "Urui", "Ivanneth", "Narbeleth", "Hithui", "Girithron", "Mettarë"];
const LOTR_DAYS = [1, 30, 30, 30, 30, 30, 31, 1, 31, 30, 30, 30, 30, 30, 1];

const STANDARD_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const STANDARD_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function sum(arr: number[]): number {
    return arr.reduce((partial, a) => partial + a, 0);
}

// date conversion algorithms

function toDayCount(day: number, month: number, year: number, calendar: "lotr" | "standard", num: number): number {
    var days;
    if (calendar == "lotr") {
        days = LOTR_DAYS.slice();
    }
    else {
        days = STANDARD_DAYS.slice();
    }

    if (year % 4 == 0) {
        if (calendar == "lotr") {
            days[7] = 2;
        }
        else {
            days[1] = 29;
        }
    }

    return sum(days.slice(0, month)) + day + num;
}

function toLOTRDate(dayCount: number): {day: number, month: number, year: number} {
    var yearMod = 0;
    if (dayCount == 0) {
        dayCount = sum(LOTR_DAYS) - 1;
        yearMod = -1;
    }
    else if (dayCount < 0) {
        while (dayCount < 0) {
            yearMod -= 1;
            dayCount += sum(LOTR_DAYS);
        }
    }
    else if (dayCount > sum(LOTR_DAYS)) {
        let total = sum(LOTR_DAYS);
        while (dayCount > total) {
            dayCount -= total;
            yearMod += 1;
        }
    }

    let month = 0;
    let day = 0;
    while (dayCount > 0) {
        day = dayCount;
        dayCount -= LOTR_DAYS[month];
        month += 1;
    }
    return {day: day, month: month-1, year: yearMod};
}

function toStandardDate(dayCount: number): {day: number, month: number, year: number} {
    var yearMod = 0;
    if (dayCount == 0) {
        dayCount = sum(STANDARD_DAYS) - 1;
        yearMod = -1;
    }
    else if (dayCount < 0) {
        while (dayCount < 0) {
            yearMod -= 1;
            dayCount += sum(STANDARD_DAYS);
        }
    }
    else if (dayCount > sum(STANDARD_DAYS)) {
        let total = sum(STANDARD_DAYS);
        while (dayCount > total) {
            dayCount -= total;
            yearMod += 1;
        }
    }

    let month = 0;
    let day = 0;
    while (dayCount > 0) {
        day = dayCount;
        dayCount -= STANDARD_DAYS[month];
        month += 1;
    }
    return {day: day, month: month-1, year: yearMod};
}

// week day constants

// set from session 7
// 10 Lothron 02 is an Eärenya/Thursday.
// BASELINE is the first day of the Fourth Age.
const BASELINE = {
    day: 1,
    month: "Yestarë",
    year: 1,
    weekday: "Elenya",
}

const LOTR_WEEKDAYS = ["Isilya", "Aldëa", "Menelya", "Eärenya", "Valanya", "Elenya", "Anarya"]

// week day algorithms

function calculateWeekday(day: number, month: number, year: number): string {
    console.log(day, month, year);
    let daycount = toDayCount(day, month, year, "lotr", 0) - 1; // -1 to convert from 'day number' to 'days since'
    console.log("daycount: ", daycount);
    for (let i = 1; i < year; ++i) {
        daycount += 365;
        if ((year - i) % 4 == 0) daycount += 1;
    }
    let index_adjustment = LOTR_WEEKDAYS.indexOf(BASELINE.weekday);
    console.log(index_adjustment, daycount, daycount%7);
    return LOTR_WEEKDAYS[(daycount + index_adjustment) % 7];
}

export {
    LOTR_DAYS,
    LOTR_MONTHS,
    STANDARD_DAYS,
    STANDARD_MONTHS,
    sum,
    toDayCount,
    toLOTRDate,
    toStandardDate,
    calculateWeekday
}