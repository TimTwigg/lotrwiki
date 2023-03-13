import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Layout from "../components/layout"

var init:boolean = false;

const LOTR_MONTHS = ["Yestarë", "Narwain", "Nínui", "Gwaeron", "Gwirith", "Lothron", "Nórui", "Loëndë", "Cerveth", "Urui", "Ivanneth", "Narbeleth", "Hithui", "Girithron", "Mettarë"];
const LOTR_DAYS = [1, 30, 30, 30, 30, 30, 31, 1, 31, 30, 30, 30, 30, 30, 1];

const STANDARD_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const STANDARD_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CURRENT_YEAR_LOTR = 2;
const CURRENT_YEAR_STANDARD = 2023;

function getValueFromSelect(id:string): string {
    let selector = document.getElementById(id) as HTMLSelectElement;
    return selector.options[selector.selectedIndex]?.value;
}

function setInnerText(id:string, text:string) {
    let el = document.getElementById(id);
    if (el != null) el.innerText = text;
}

function sum(arr: number[]): number {
    return arr.reduce((partial, a) => partial + a, 0);
}

function toDayCount(day:number, month:number, year:number, calendar: "lotr" | "standard", num:number): number {
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

function toLOTRDate(dayCount:number): {day:number, month:number, year:number} {
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

function toStandardDate(dayCount:number): {day:number, month:number, year:number} {
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

function changeOperation(operation: string) {
    if (operation == "convert") {
        document.getElementById("lotrDateElement")!.classList.add("hidden");
        document.getElementById("standardDateElement")!.classList.remove("hidden");
        document.getElementById("lotrDateAdditionElement")!.classList.add("hidden");
        document.getElementById("lotrDateDifferenceElement")!.classList.add("hidden");
    }
    else if (operation == "reverse") {
        document.getElementById("lotrDateElement")!.classList.remove("hidden");
        document.getElementById("standardDateElement")!.classList.add("hidden");
        document.getElementById("lotrDateAdditionElement")!.classList.add("hidden");
        document.getElementById("lotrDateDifferenceElement")!.classList.add("hidden");
    }
    else if (operation == "add") {
        document.getElementById("lotrDateElement")!.classList.remove("hidden");
        document.getElementById("standardDateElement")!.classList.add("hidden");
        document.getElementById("lotrDateAdditionElement")!.classList.remove("hidden");
        document.getElementById("lotrDateDifferenceElement")!.classList.add("hidden");
    }
    else if (operation == "diff") {
        document.getElementById("lotrDateElement")!.classList.remove("hidden");
        document.getElementById("standardDateElement")!.classList.add("hidden");
        document.getElementById("lotrDateAdditionElement")!.classList.add("hidden");
        document.getElementById("lotrDateDifferenceElement")!.classList.remove("hidden");
    }

    if (!init) {
        insertLOTRDateOptions(1, true);
        insertLOTRDateOptions(2, true);
        init = true;
    }
}

function insertLOTRDateOptions(dateCode:number, pageLoad:boolean = false) {
    var yearSelect = (document.getElementById("lotrYear" + dateCode)) as HTMLSelectElement;
    var monthSelect = (document.getElementById("lotrMonth" + dateCode)) as HTMLSelectElement;
    var daySelect = (document.getElementById("lotrDay" + dateCode)) as HTMLSelectElement;

    if (pageLoad) {
        var year = "Year";
        var month = "Month";
        var day = "Day";
    }
    else {
        var year = yearSelect.options[yearSelect.selectedIndex]?.value;
        var month = monthSelect.options[monthSelect.selectedIndex]?.value;
        var day = daySelect.options[daySelect.selectedIndex]?.value;
        if (year == null || month == null) {
            year = "1";
            month = "Yestarë";
            day = "1";
        }
    }

    while (yearSelect.firstChild) {
        yearSelect.removeChild(yearSelect.lastChild!);
    }
    while (monthSelect.firstChild) {
        monthSelect.removeChild(monthSelect.lastChild!);
    }
    while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.lastChild!);
    }

    var months = LOTR_MONTHS.slice();
    var days = LOTR_DAYS.slice();

    if (parseInt(year) % 4 == 0) {
        months[7] = "Enderi";
        days[7] = 2;
    }

    // year
    let child = document.createElement("option");
    child.value = "Year";
    child.text = "Year";
    child.disabled = true;
    if (year == "Year") child.selected = true;
    yearSelect.appendChild(child);
    for (var i = 1; i <= 10; ++i) {
        let child = document.createElement("option");
        child.text = i.toString();
        child.value = i.toString();
        if (parseInt(year) == i) child.selected = true;
        yearSelect.appendChild(child);
    }

    // months
    if (months.indexOf(month) == -1) month = "Month";
    child = document.createElement("option");
    child.value = "Month";
    child.text = "Month";
    child.disabled = true;
    if (month == "Month") child.selected = true;
    monthSelect.appendChild(child);
    for (var m of months) {
        let child = document.createElement("option");
        child.text = m;
        child.value = m;
        if (month == m) child.selected = true;
        monthSelect.appendChild(child);
    }

    // days
    var index = months.findIndex(x => x === month);
    var dayCount = days[index];
    child = document.createElement("option");
    child.value = "Day";
    child.text = "Day";
    child.disabled = true;
    if (day == "Day" || index == -1 || parseInt(day) > dayCount) child.selected = true;
    daySelect.appendChild(child);
    for (var d = 1; d <= dayCount; ++d) {
        let child = document.createElement("option");
        child.text = d.toString();
        child.value = d.toString();
        if (parseInt(day) == d) child.selected = true;
        daySelect.appendChild(child);
    }
}

function calculateDate() {
    var outString = "";
    var operation = getValueFromSelect("optionPicker");

    // convert from standard date to lotr date
    if (operation == "convert") {
        let standardDate = (document.getElementById("standardDate") as HTMLInputElement).value;
        if (standardDate == "" || standardDate == null) {
            setInnerText("calculatorOut", "No Date Selected");
            return;
        }

        let date = new Date(standardDate);
        let day = date.getUTCDate();
        let month = date.getUTCMonth();
        let year = date.getUTCFullYear();
        let daycount = toDayCount(day, month, year, "standard", 0);
        let dateObj = toLOTRDate(daycount);
        outString = String(dateObj["day"]).padStart(2, "0") + " " + LOTR_MONTHS[dateObj["month"]] + " " +
            String(dateObj["year"] + CURRENT_YEAR_LOTR).padStart(2, "0") + " (Fourth Age)";
    }

    // convert from lotr date to standard date
    else if (operation == "reverse") {
        let day = parseInt(getValueFromSelect("lotrDay1"));
        let year = parseInt(getValueFromSelect("lotrYear1"));
        let month = getValueFromSelect("lotrMonth1");
        if (isNaN(day) || day == 0 || month == "Month" || isNaN(year)) {
            setInnerText("calculatorOut", "No Date Selected");
            return;
        }

        let monthNum = LOTR_MONTHS.indexOf(month);
        if (year % 4 == 0 && month == "Enderi") {
            monthNum = 7;
        }
        let daycount = toDayCount(day, monthNum, year, "lotr", 0);
        let dateObj = toStandardDate(daycount);
        outString = String(dateObj["day"]).padStart(2, "0") + " " + STANDARD_MONTHS[dateObj["month"]] + " " +
            String(dateObj["year"] + CURRENT_YEAR_STANDARD).padStart(2, "0");
    }

    // add days to lotr date
    else if (operation == "add") {
        let day = parseInt(getValueFromSelect("lotrDay1"));
        let year = parseInt(getValueFromSelect("lotrYear1"));
        let month = getValueFromSelect("lotrMonth1");
        let num = parseInt((document.getElementById("dayInput") as HTMLInputElement).value);
        if (isNaN(day) || day == 0 || month == "Month" || isNaN(year)) {
            setInnerText("calculatorOut", "No Date Selected");
            return;
        }
        if (isNaN(num)) num = 0;

        let monthNum = LOTR_MONTHS.indexOf(month);
        if (year % 4 == 0 && month == "Enderi") {
            monthNum = 7;
        }
        let daycount = toDayCount(day, monthNum, year, "lotr", num);
        let dateObj = toLOTRDate(daycount);
        outString = String(dateObj["day"]).padStart(2, "0") + " " + LOTR_MONTHS[dateObj["month"]] + " " +
            String(dateObj["year"] + year).padStart(2, "0");
    }

    else if (operation == "diff") {
        let day1 = parseInt(getValueFromSelect("lotrDay1"));
        let year1 = parseInt(getValueFromSelect("lotrYear1"));
        let month1 = getValueFromSelect("lotrMonth1");
        let day2 = parseInt(getValueFromSelect("lotrDay2"));
        let year2 = parseInt(getValueFromSelect("lotrYear2"));
        let month2 = getValueFromSelect("lotrMonth2");
        if (isNaN(day1) || isNaN(day2) || day1 == 0 || day2 == 0 || month1 == "Month" || month2 == "Month" || isNaN(year1) || isNaN(year2)) {
            setInnerText("calculatorOut", "Dates Note Properly Selected");
            return;
        }

        let monthNum1 = LOTR_MONTHS.indexOf(month1);
        let monthNum2 = LOTR_MONTHS.indexOf(month2);
        if (year1 % 4 == 0 && month1 == "Enderi") {
            monthNum1 = 7;
        }
        if (year2 % 4 == 0 && month2 == "Enderi") {
            monthNum2 = 7;
        }

        let daycount1 = toDayCount(day1, monthNum1, year1, "lotr", 0);
        let daycount2 = toDayCount(day2, monthNum2, year2, "lotr", 0);
        let days = daycount2 - daycount1;
        if (year1 != year2) {
            var daysMod = 0;
            for (var i = 0; i < Math.abs(year2 - year1); ++i) {
                if (year1 < year2) {
                    daysMod += 365;
                    if ((year1 + i) % 4 == 0) daysMod += 1;
                }
                else {
                    daysMod -= 365;
                    if ((year2 + i) % 4 == 0) daysMod -= 1;
                }
            }
            days += daysMod;
        }
        outString = Math.abs(days) + " days";
    }

    setInnerText("calculatorOut", outString);
}

const CalendarPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "Calendar">
            <div>
                <h1>Calendars and the Reckoning of Time</h1>
                <div className = "contentLinks">
                    <AnchorLink to = "/calendar#overview">Overview</AnchorLink>
                    <AnchorLink to = "/calendar#calculator">Calculator</AnchorLink>
                    <AnchorLink to = "/calendar#monthsTable">Months and Seasons</AnchorLink>
                    <AnchorLink to = "/calendar#campaign">Campaign Time</AnchorLink>
                </div>
                <hr/>

                <h3 id = "overview">Overview</h3>
                <p>
                    Middle Earth has many calendars, from the elven calendar to the King's Reckoning to the Steward's Reckoning to
                    the New Reckoning to the Shire Reckoning. These can quickly become confusing, and who really needs to keep detailed
                    track of time for a D&D campaign anyway? <br/>
                    Answer: the DM. <br/>
                    And sometimes some players like to know these things. <br/>
                    And some quests rely on specific timing. <br/>
                    And ... <br/>
                    You get the point.
                </p>
                <p>
                    For the LOTR D&D Campiagn, we use a slightly adapted form of the King's Reckoning. <br/>
                    The standard King's Reckoning is very similar to our own Gregorian calendar. There are twelve months, ten with 30 days
                    and 2 with 31. There are 2 days between one year and the next and 1 mid-year day. The calendar year begins at
                    mid-winter. <br/>
                    The months of the year are: <br/>
                    Narwain, Nínui, Gwaeron, Gwirith, Lothron, Nórui, Cerveth, Urui, Ivanneth, Narbeleth, Hithui, and Girithron. <br/>
                    The year-start day is Yestarë, the year-end day is Mettarë, and the mid-year day is Loëndë. <br/>
                    Nórui and Cerveth have 31 days, the rest have 30. On a leap year, the extra day goes in the middle and there are 2 mid-year
                    days, called the Enderi.
                </p>
                <hr/>

                <h3 id = "calculator">Calculator</h3>
                <p>
                    Use this calendar calculator to convert between regular dates and the King's Reckoning (KR). Date addition is also supported. <br/>
                    If you have a calendar calculation you would like to perform that is not currently supported, contact the developer. <br/>
                    NOTE: King's Reckoning dates are by default in the Fourth Age. Operations involving other ages are currently not supported.
                </p>
                <form className = "container">
                    <label htmlFor = "optionPicker" className = "offset-by-one column three columns">Operation</label>
                    <select id = "optionPicker" className = "eight columns" onChange = {(x) => changeOperation(x.target.value)}>
                        <option value = "convert">Convert from Standard Date</option>
                        <option value = "reverse">Convert to Standard Date</option>
                        <option value = "add">Add days to a KR date</option>
                        <option value = "diff">Find the difference between two KR dates</option>
                    </select>
                    <div className = "spacer"></div>
                    <div id = "standardDateElement">
                        <label htmlFor = "standardDate" className = "offset-by-one column three columns">Standard Date</label>
                        <input id = "standardDate" title = "Standard Gregorian Date" type = "date" className = "four columns"/>
                    </div>
                    <div id = "lotrDateElement" className = "hidden">
                        <label className = "offset-by-one column three columns">LOTR Date (FA)</label>
                        <select id = "lotrDay1" title = "King's Reckoning Day" className = "two columns"></select>
                        <select id = "lotrMonth1" title = "King's Reckoning Month" className = "three columns" onChange = {() => insertLOTRDateOptions(1)}></select>
                        <select id = "lotrYear1" title = "King's Reckoning Year" className = "two columns" onChange = {() => insertLOTRDateOptions(1)}></select>
                    </div>
                    <div className = "spacer"></div>
                    <div id = "lotrDateAdditionElement" className = "hidden">
                        <label htmlFor = "dayInput" className = "offset-by-one column three columns">Days</label>
                        <input type = "number" id = "dayInput" className = "four columns"/>
                        <div className = "spacer"></div>
                    </div>
                    <div id = "lotrDateDifferenceElement" className = "hidden">
                        <label className = "offset-by-one column three columns">LOTR Date (FA)</label>
                        <select id = "lotrDay2" title = "King's Reckoning Day" className = "two columns"></select>
                        <select id = "lotrMonth2" title = "King's Reckoning Month" className = "three columns" onChange = {() => insertLOTRDateOptions(2)}></select>
                        <select id = "lotrYear2" title = "King's Reckoning Year" className = "two columns" onChange = {() => insertLOTRDateOptions(2)}></select>
                        <div className = "spacer"></div>
                    </div>
                    <p className = "output nine columns" id = "calculatorOut"></p>
                    <input type = "button" onClick = {() => calculateDate()} value = "Calculate"></input>
                </form>
                <hr/>

                <h3 id = "monthsTable">Months and Seasons</h3>
                <table className = "one-half column">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Month</th>
                            <th>Day Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NA</td>
                            <td>Yestarë</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Narwain</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nínui</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Gwaeron</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Gwirith</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Lothron</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Nórui</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>NA</td>
                            <td>Loëndë</td>
                            <td>1 (2)</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Cerveth</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Urui</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Ivanneth</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Narbeleth</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Hithui</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Girithron</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>NA</td>
                            <td>Mettarë</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
                <div className = "one-half column">
                    <p>
                        In the North-West of Middle Earth (Including Eriador, Rhovanion, Rohan, Gondor, and their surrounding areas), winter
                        is generally regarded as lasting from Girithron to Nínui, Spring from Gwaeron to Lothron, Summer from Nórui to Urui,
                        and Fall from Ivanneth to Hithui.
                    </p>
                </div>
                <hr/>

                <h3 id = "campaign">Campaign Time</h3>
                <p>
                    As mentioned above, we will use the King's Reckoning for the LOTR D&D campaign. The campaign starts in early to mid Spring
                    (late Gwaeron), and from there depends on the players. Many companies prefer to spend winters somewhere warm...
                </p>
                <div className = "double spacer"></div>
            </div>
        </Layout>
    )
}

export default CalendarPage;

export const Head: HeadFC = () => (
    <title>Calendar</title>
);