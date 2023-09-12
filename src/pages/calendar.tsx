import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { AnchorLinkBar } from "../components/linkBar";
import VariableSelect from "../components/variableSelect";
import { LOTR_DAYS, LOTR_MONTHS, STANDARD_MONTHS, toDayCount, toLOTRDate, toStandardDate, calculateWeekday, BASELINE } from "../algorithms/dateAlgorithms";
import { pNumF } from "./../algorithms/utilities";

const CURRENT_YEAR_LOTR = 2;
const THIRD_AGE_END_YEAR = 3021;

const CalendarPage: React.FC<PageProps> = () => {
    // LOTR date 1 state
    var [lotrDay1, SetLotrDay1] = React.useState("Day");
    var [dayOptions1, SetDayOptions1] = React.useState(["1"] as string[]);
    var [lotrMonth1, SetLotrMonth1] = React.useState("Month");
    var [monthOptions1, SetMonthOptions1] = React.useState(LOTR_MONTHS);
    var [lotrYear1, SetLotrYear1] = React.useState("Year");
    var [lotrAge1, SetLotrAge1] = React.useState("FA");

    // LOTR date 2 state
    var [lotrDay2, SetLotrDay2] = React.useState("Day");
    var [dayOptions2, SetDayOptions2] = React.useState(["1"] as string[]);
    var [lotrMonth2, SetLotrMonth2] = React.useState("Month");
    var [monthOptions2, SetMonthOptions2] = React.useState(LOTR_MONTHS);
    var [lotrYear2, SetLotrYear2] = React.useState("Year");
    var [lotrAge2, SetLotrAge2] = React.useState("FA");
    
    // other states
    var [operation, SetOperation] = React.useState("convert");
    var [dayInput, SetDayInput] = React.useState(0);
    var [calculatorOut, SetCalculatorOut] = React.useState("");

    function changeOperation(operation: string) {
        if (operation == "convert") {
            document.getElementById("lotrDateElement")!.classList.add("hidden");
            document.getElementById("standardDateElement")!.classList.remove("hidden");
            document.getElementById("lotrDateAdditionElement")!.classList.add("hidden");
            document.getElementById("lotrDateDifferenceElement")!.classList.add("hidden");
        }
        else if (operation == "reverse" || operation == "weekday") {
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
    }

    function changeLOTRDateOptions(dateCode: number, month: string, year: string) {
        let months = LOTR_MONTHS.slice();
        let days = LOTR_DAYS.slice();

        if (parseInt(year) % 4 == 0) {
            months[7] = "Enderi";
            days[7] = 2;
        }

        let monthNum = months.indexOf(month);
        if (monthNum == -1) monthNum = 7;

        let dayOptions: string[] = [];
        for (let i = 1; i <= days[monthNum]; ++i) {
            dayOptions.push(i.toString());
        }

        if (dateCode == 1) {
            SetDayOptions1(dayOptions);
            SetMonthOptions1(months);
        }
        else if (dateCode == 2) {
            SetDayOptions2(dayOptions);
            SetMonthOptions2(months);
        }
    }
    
    function calculateDate() {
        // convert from standard date to lotr date
        if (operation == "convert") {
            let standardDate = (document.getElementById("standardDate") as HTMLInputElement).value;
            if (standardDate == "" || standardDate == null) {
                SetCalculatorOut("No Date Selected");
                return;
            }

            let age = "FA";
            let date = new Date(standardDate);
            let day = date.getUTCDate();
            let month = date.getUTCMonth();
            let year = date.getUTCFullYear();
            let daycount = toDayCount(day, month, year, "standard", 0);
            if (year < BASELINE.standardYear) {
                year += THIRD_AGE_END_YEAR;
                age = "TA";
            }
            year = year - BASELINE.standardYear + 1;
            let dateObj = toLOTRDate(daycount);
            SetCalculatorOut(`${calculateWeekday(dateObj.day, dateObj.month, dateObj.year + CURRENT_YEAR_LOTR)}, ${String(dateObj.day).padStart(2, "0")}
                ${LOTR_MONTHS[dateObj.month]} ${String(dateObj.year + year).padStart(2, "0")} (${age})`);
        }
    
        // convert from lotr date to standard date
        else if (operation == "reverse") {
            let day = parseInt(lotrDay1);
            let month = lotrMonth1;
            let year = parseInt(lotrYear1);
            if (isNaN(day) || day == 0 || month == "Month" || isNaN(year)) {
                SetCalculatorOut("No Date Selected");
                return;
            }
    
            let monthNum = LOTR_MONTHS.indexOf(month);
            if (year % 4 == 0 && month == "Enderi") {
                monthNum = 7;
            }
            let daycount = toDayCount(day, monthNum, year, "lotr", 0);
            let dateObj = toStandardDate(daycount);
            if (lotrAge1 == "FA") year = year + BASELINE.standardYear - 1;
            else if (lotrAge1 == "TA") year = year - THIRD_AGE_END_YEAR + BASELINE.standardYear - 1;
            SetCalculatorOut(`${String(dateObj.day).padStart(2, "0")} ${STANDARD_MONTHS[dateObj.month]}
                ${String(Math.abs(dateObj.year + year)).padStart(2, "0")}${year < 0 ? " (BC)" : ""}`);
        }
    
        // get week day from lotr date
        else if (operation == "weekday") {
            let day = parseInt(lotrDay1);
            let month = lotrMonth1;
            let year = parseInt(lotrYear1);
            if (isNaN(day) || day == 0 || month == "Month" || isNaN(year)) {
                SetCalculatorOut("No Date Selected");
                return;
            }
    
            let monthNum = LOTR_MONTHS.indexOf(month);
            if (year % 4 == 0 && month == "Enderi") {
                monthNum = 7;
            }
            let weekday = calculateWeekday(day, monthNum, year);
            SetCalculatorOut(`${day} ${month} ${year} was/will be a${weekday[0] == "M" || weekday[0] == "V" ? "" : "n"} ${weekday}`);
        }
    
        // add days to lotr date
        else if (operation == "add") {
            let day = parseInt(lotrDay1);
            let month = lotrMonth1;
            let year = parseInt(lotrYear1);
            let age = lotrAge1;
            if (isNaN(day) || day == 0 || month == "Month" || isNaN(year)) {
                SetCalculatorOut("No Date Selected");
                return;
            }
    
            let monthNum = LOTR_MONTHS.indexOf(month);
            if (year % 4 == 0 && month == "Enderi") {
                monthNum = 7;
            }
            let daycount = toDayCount(day, monthNum, year, "lotr", dayInput);
            let dateObj = toLOTRDate(daycount);
            if (age == "TA" && dateObj.year + year > THIRD_AGE_END_YEAR) {
                year = dateObj.year + year - THIRD_AGE_END_YEAR;
                dateObj.year = 0;
                age = "FA";
            }
            SetCalculatorOut(`${calculateWeekday(dateObj.day, dateObj.month, dateObj.year + year)}, ${String(dateObj["day"]).padStart(2, "0")}
                ${LOTR_MONTHS[dateObj["month"]]} ${String(dateObj["year"] + year).padStart(2, "0")} (${age})`);
        }
    
        // calculate difference between 2 KR lotr dates
        else if (operation == "diff") {
            let day1 = parseInt(lotrDay1);
            let year1 = parseInt(lotrYear1);
            let day2 = parseInt(lotrDay2);
            let year2 = parseInt(lotrYear2);
            if (isNaN(day1) || isNaN(day2) || day1 == 0 || day2 == 0 || lotrMonth1 == "Month" || lotrMonth2 == "Month" || isNaN(year1) || isNaN(year2)) {
                SetCalculatorOut("Dates Note Properly Selected");
                return;
            }
    
            let monthNum1 = LOTR_MONTHS.indexOf(lotrMonth1);
            let monthNum2 = LOTR_MONTHS.indexOf(lotrMonth2);
            if (year1 % 4 == 0 && lotrMonth1 == "Enderi") {
                monthNum1 = 7;
            }
            if (year2 % 4 == 0 && lotrMonth2 == "Enderi") {
                monthNum2 = 7;
            }
    
            let daycount1 = toDayCount(day1, monthNum1, year1, "lotr", 0);
            let daycount2 = toDayCount(day2, monthNum2, year2, "lotr", 0);
            let days = daycount2 - daycount1;
            if (year1 != year2 || lotrAge1 != lotrAge2) {
                if (lotrAge1 == "TA") year2 += THIRD_AGE_END_YEAR;
                else if (lotrAge2 == "TA") year1 += THIRD_AGE_END_YEAR;
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
            SetCalculatorOut(`${pNumF(Math.abs(days))} days or ${pNumF(Math.round(Math.abs(days) / 3.65256) / 100)} years`);
        }
    }

    return (
        <Layout title = "        ">
            <div>
                <h1>Calendars and the Reckoning of Time</h1>
                <hr/>
                <AnchorLinkBar hideWhenSmall = {true} pageTitle = "Calendar" links = {[
                    { name: "Overview", url: "/calendar#overview" },
                    { name: "Calculator", url: "/calendar#calculator" },
                    { name: "Months, Days, Seasons", url: "/calendar#monthsTable" },
                    { name: "Campaign Time", url: "/calendar#campaign" }
                ]}/>
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
                <h5>On Converting Between LOTR and Gregorian Dates and the Baseline</h5>
                <p>
                    In order to convert between the King's Reckoning and Gregorian calendars, a baseline must be chosen: a day and year in each calendar that are said
                    to line up which we can use as a reference to convert. For example, consider converting 1 January 2023 to King's Reckoning. Clearly it is Yestarë,
                    but in which year? <br/>
                    I have chosen to align the years 1977 (Gregorian) and 1 (Fourth Age). The significance of these dates is thus: 1977 is the publication date of the
                    Silmarillion (Tolkien's lore) while the Fourth Age is the proper start of my adapted lore. This means that years prior to 1977 are the Third Age,
                    and our current year of 2023 is the year 47 in the Fourth Age.
                </p>
                <hr/>

                <h3 id = "calculator">Calculator</h3>
                <p>
                    Use this calendar calculator to convert between regular dates and the King's Reckoning (KR). Date addition is also supported. <br/>
                    If you have a calendar calculation you would like to perform that is not currently supported, contact the developer. <br/>
                    NOTE: King's Reckoning dates are by default in the Fourth Age. Operations involving other ages are currently not supported.
                </p>
                <form className = "container">
                    <label htmlFor = "optionPicker" className = "column three columns">Operation</label>
                    <select id = "optionPicker" className = "eight columns" onChange = {(x) => {changeOperation(x.target.value), SetOperation(x.target.value)}}>
                        <option value = "convert">Convert from Standard Date</option>
                        <option value = "reverse">Convert to Standard Date</option>
                        <option value = "weekday">Get Day of the Week for A KR Date</option>
                        <option value = "add">Add days to a KR date</option>
                        <option value = "diff">Find the difference between two KR dates</option>
                    </select>
                    <div className = "spacer"/>

                    <div id = "standardDateElement">
                        <label htmlFor = "standardDate" className = "column three columns">Standard Date</label>
                        <input id = "standardDate" title = "Standard Gregorian Date" type = "date" className = "four columns"/>
                    </div>

                    <div id = "lotrDateElement" className = "hidden">
                        <label className = "column three columns">LOTR Date</label>
                        <VariableSelect name = "Day" options = {dayOptions1} onChange = {(v) => {SetLotrDay1(v)}} className = "two columns"/>
                        <VariableSelect name = "Month" options = {monthOptions1} onChange = {(v) => {SetLotrMonth1(v), changeLOTRDateOptions(1, v, lotrYear1)}} className = "three columns"/>
                        <input type = "number" className = "two columns" placeholder = "Year"
                            onKeyDown = {(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                            onChange = {(v) => {SetLotrYear1(v.target.value), changeLOTRDateOptions(1, lotrMonth1, v.target.value)}}/>
                        <select id = "lotrAge1" title = "King's Reckoning Age" className = "two columns" defaultValue = {"FA"} onChange = {(v) => SetLotrAge1(v.target.value)}>
                            <option value = "FA">FA</option>
                            <option value = "TA">TA</option>
                        </select>
                    </div>

                    <div className = "spacer"/>
                    <div id = "lotrDateAdditionElement" className = "hidden">
                        <label htmlFor = "dayInput" className = "column three columns">Days</label>
                        <input type = "number" id = "dayInput" className = "four columns" placeholder = "Days" onChange = {(v) => SetDayInput(parseInt(v.target.value) || 0)}/>
                        <div className = "spacer"/>
                    </div>

                    <div id = "lotrDateDifferenceElement" className = "hidden">
                        <label className = "column three columns">LOTR Date</label>
                        <VariableSelect name = "Day" options = {dayOptions2} onChange = {(v) => SetLotrDay2(v)} className = "two columns"/>
                        <VariableSelect name = "Month" options = {monthOptions2} onChange = {(v) => {SetLotrMonth2(v), changeLOTRDateOptions(2, v, lotrYear2)}} className = "three columns"/>
                        <input type = "number" className = "two columns" placeholder = "Year"
                            onKeyDown = {(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                            onChange = {(v) => {SetLotrYear2(v.target.value), changeLOTRDateOptions(2, lotrMonth2, v.target.value)}}/>
                        <select id = "lotrAge2" title = "King's Reckoning Age" className = "two columns" defaultValue = {"FA"} onChange = {(v) => SetLotrAge2(v.target.value)}>
                            <option value = "FA">FA</option>
                            <option value = "TA">TA</option>
                        </select>
                        <div className = "spacer"/>
                    </div>

                    <div className = "break"/>
                    <p className = "output nine columns" id = "calculatorOut">{calculatorOut}</p>
                    <input type = "button" onClick = {() => calculateDate()} value = "Calculate" className = "three columns"></input>
                </form>
                <hr/>

                <h3 id = "monthsTable">Months, Days, and Seasons</h3>
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
                        and Fall from Ivanneth to Hithui. <br/>
                        <br/>
                        The days of the week are Isilya, Aldëa, Menelya, Eärenya, Valanya, Elenya, and Anarya.
                    </p>
                    <table className = "equi center rpad">
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Equivalent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Isilya</td>
                                <td>Monday</td>
                            </tr>
                            <tr>
                                <td>Aldëa</td>
                                <td>Tuesday</td>
                            </tr>
                            <tr>
                                <td>Menelya</td>
                                <td>Wednesday</td>
                            </tr>
                            <tr>
                                <td>Eärenya</td>
                                <td>Thursday</td>
                            </tr>
                            <tr>
                                <td>Valanya</td>
                                <td>Friday</td>
                            </tr>
                            <tr>
                                <td>Elenya</td>
                                <td>Saturday</td>
                            </tr>
                            <tr>
                                <td>Anarya</td>
                                <td>Sunday</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>

                <h3 id = "campaign">Campaign Time</h3>
                <p>
                    As mentioned above, we will use the King's Reckoning for the LOTR D&D campaign. The campaign starts in early to mid Spring
                    (late Gwaeron), and from there depends on the players. Many companies prefer to spend winters somewhere warm...
                </p>
                <div className = "double spacer"/>
            </div>
        </Layout>
    )
}

export default CalendarPage;

export const Head: HeadFC = () => <title>Calendar</title>;