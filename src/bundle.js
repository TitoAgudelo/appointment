/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [
	{
		"value": "any",
		"label": "Any date"
	},
	{
		"value": "weekdays",
		"label": "Only weekdays"
	},
	{
		"value": "weekends",
		"label": "Only weekends"
	}
];

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const range = (start, end, step = 1) => Array.from({ length: Math.floor((end - start) / step) }, (v, k) => k * step + start)

class TimeGeneratorService {
  constructor () {
    this.minutesInterval = 15
    this.currentDate = new Date()
  }

  get timesInDecimal () {
    return range(0, 24, this.convertMinutesToDecimal(this.minutesInterval))
  }

  get times () {
    return this.timesInDecimal.map(decimal => this.convertDecimalToTime(decimal))
  }

  get currentDayTimes () {
    const currentHour = this.currentDate.getHours()
    const currentMinute = this.currentDate.getMinutes()
    const currentTimeInDecimal = currentHour + this.convertMinutesToDecimal(currentMinute)
    const currentDayTimesInDecimal = this.timesInDecimal.filter(time => time > currentTimeInDecimal)
    return currentDayTimesInDecimal.map(decimal => this.convertDecimalToTime(decimal))
  }

  convertDecimalToTime (decimal) {
    let timeZone = 'AM'
    let hour = parseInt(decimal)
    const minutesInDecimal = parseFloat(decimal % 1)
    const minutes = this.convertDecimalToMinutes(minutesInDecimal)

    if (hour > 12) {
      timeZone = 'PM'
      hour -= 12
    }

    return `${this.normalize00(hour)}:${this.normalize00(minutes)} ${timeZone}`
  }

  convertMinutesToDecimal (minutes) {
    return minutes / 60
  }

  convertDecimalToMinutes (decimal) {
    return decimal * 60
  }

  normalize00 (value) {
    return value === 0 ? '00' : value
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TimeGeneratorService;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_datepicker_datepicker_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_datepicker_filter_datepicker_filter_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_timepicker_timepicker_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_appointment_appointment_component__ = __webpack_require__(8);





const components = [
  __WEBPACK_IMPORTED_MODULE_0__app_datepicker_datepicker_component__["a" /* DatepickerComponent */],
  __WEBPACK_IMPORTED_MODULE_1__app_datepicker_filter_datepicker_filter_component__["a" /* DatepickerFilterComponent */],
  __WEBPACK_IMPORTED_MODULE_2__app_timepicker_timepicker_component__["a" /* TimepickerComponent */],
  __WEBPACK_IMPORTED_MODULE_3__app_appointment_appointment_component__["a" /* AppointmentComponent */]
]

components.forEach(component => customElements.define(component.selector, component))


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".components {\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.appointment-actions {\n  margin: 4em 0 3em;\n}\n\nbutton {\n  font-weight: normal;\n  color: #2b2b2b;\n  cursor: pointer;\n  height: 35px;\n  border-radius: 5px;\n  border: 1px solid #d6d6d6;\n  padding: 2px 25px;\n  background: #cccccc;\n  background: -webkit-linear-gradient(top, #ffffff 0%,#eeeeee 17%,#cccccc 100%);\n  background: linear-gradient(to bottom, #ffffff 0%,#eeeeee 17%,#cccccc 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#cccccc',GradientType=0 );\n  font-size: 14px;\n  margin-right: 1em;\n}\n\n@media screen and (max-width: 900px) {\n\n}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n    display: inline-block;\n    padding: 0 1em 0 0;\n    margin-bottom: 2em;\n}\n\np {\n    margin: 0;\n}\n\n#filter-wrapper {\n    padding: 0 1em 0 0;\n}\n\n.filter-calendar {\n    background-color: #FFFFFF;\n    padding: 1rem;\n    border-radius: 15px;\n    border: 1px solid #e0e0e0;\n    min-width: 200px;\n    margin-top: 1em;\n}\n\n.filter-calendar label {\n    width: 100%;\n    display: block;\n    margin: 10px 0;\n}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    width: 18em;\n}\n\ninput {\n    border-radius: 5px;\n    border: 1px solid #e0e0e0;\n    height: 24px;\n    min-width: 190px;\n    width: 230px;\n    padding: 0 10px;\n}\n\nimg {\n    position: absolute;\n    width: 25px;\n    margin-left: 5px;\n}\n\n.ui-datepicker {\n    position: absolute;\n    top: 28px;\n    left: 0;\n    z-index: 1;\n    width: 17em;\n    background-color: white;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.datepicker-header {\n    background: linear-gradient(to bottom, #ffffff 0%,#eeeeee 17%,#cccccc 100%);\n    color: #222222;\n    font-weight: bold;\n    min-height: 40px;\n    justify-content: space-around;\n    align-items: center;\n    display: flex;\n}\n\n.datepicker-header h5 {\n    margin: 5px;\n    font-family: Verdana,Arial,sans-serif;\n}\n\n.datepicker-header button {\n    position: relative;\n    height: 20px;\n    background-color: #323232;\n    border-radius: 50%;\n    border: 0;\n    width: 20px;\n    padding: 3px;\n    cursor: pointer;\n}\n\n.datepicker-header button img {\n    position: relative;\n    width: 17px;\n    margin: -5px;\n}\n\n.datepicker-nav {\n    list-style: none;\n    padding: 0;\n    display: inline-flex;\n    width: 100%;\n    justify-content: space-around;\n    font-weight: bold;\n    font-family: Verdana,Arial,sans-serif;\n    font-size: .9em;\n}\n\n.datepicker-days {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.day {\n    font-family: Verdana,Arial,sans-serif;\n    box-sizing: border-box;\n    cursor: pointer;\n    font-weight: 400;\n    flex-basis: calc(100% / 7);\n    max-width: 40px;\n    height: 40px;\n    line-height: 40px;\n    margin: 0;\n    display: inline-block;\n    position: relative;\n    justify-content: center;\n    text-align: right;\n    border: 1px solid #d3d3d3;\n    background-color: #e6e6e6;\n    font-weight: normal;\n    color: #555555;\n    padding-right: .2em;\n    font-size: .9em;\n}\n\n.day:disabled {\n    opacity: 0.5;\n    cursor: default;\n}\n\n.day.selected {\n    border: 1px solid #fcefa1;\n    background-color: #fbf9ee;\n    color: #363636;\n}\n\n.empty-day {\n    opacity: .35;\n    background-image: none;\n    cursor: none;\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    width: 18em;\n}\n\nselect {\n    background-color: white;\n    border-radius: 5px;\n    border: 1px solid #e0e0e0;\n    height: 24px;\n    min-width: 190px;\n    width: 252px;\n    padding: 0 10px;\n}\n\nimg {\n    position: absolute;\n    width: 25px;\n    margin-left: 5px;\n    top: 0;\n}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appointment_template__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointment_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointment_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__appointment_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_filter_filters_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_filter_filters_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__datepicker_filter_filters_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timepicker_time_generator_service__ = __webpack_require__(2);





class AppointmentComponent extends HTMLElement {
  static get selector () { return 'app-appointment' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.setDefaultValues()
    this.render()
  }

  setDefaultValues () {
    const timeGenerator = new __WEBPACK_IMPORTED_MODULE_3__timepicker_time_generator_service__["a" /* TimeGeneratorService */]()
    const time = timeGenerator.currentDayTimes[0]
    const filter = __WEBPACK_IMPORTED_MODULE_2__datepicker_filter_filters_json___default.a[0].value

    this.date = new Date()
    this.time = time
    this.filter = filter
    this.isSaved = false
    this.closed = true
  }

  render () {
    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__appointment_template__["a" /* default */])({
      date: this.date,
      time: this.time,
      filter: this.filter,
      isSaved: this.isSaved,
      isCanceled: this.isCanceled,
      closed: this.closed,
    })

    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__appointment_css___default.a}</style>
      ${innerHTML}
    `

    this.addEventListeners()
  }

  addEventListeners () {
    this.element.querySelector('app-datepicker').addEventListener('selected-date', ({ detail }) => this.updateDate(detail))
    this.element.querySelector('app-datepicker-filter').addEventListener('selected-filter', ({ detail }) => this.updateFilter(detail))
    this.element.querySelector('app-timepicker').addEventListener('selected-time', ({ detail }) => this.updateTime(detail))
    this.element.querySelector('.save').addEventListener('click', () => this.saveAppointment())
    this.element.querySelector('.cancel').addEventListener('click', () => this.cancelAppointment())
  }

  updateDate (date) {
    console.debug('updateDate', date)
    this.date = date
  }

  updateTime (time) {
    console.debug('updateTime', time)
    this.time = time
  }

  updateFilter (filter) {
    console.debug('updateFilter', filter)
    this.filter = filter
    this.closed = this.element.querySelector('app-datepicker').getAttribute('closed')
    this.render()
  }

  saveAppointment () {
    console.debug('SAVE')
    this.dispatchEvent(new CustomEvent('custom-event'))
    this.isSaved = true
    this.closed = true
    this.render()
  }

  cancelAppointment () {
    console.debug('CANCEL')
    this.dispatchEvent(new CustomEvent('custom-event'))
    this.setDefaultValues()
    this.isCanceled = true
    this.render()
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppointmentComponent;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({ date, time, filter, isSaved, isCanceled , closed}) => `
  <div class="components">
    <app-datepicker-filter filter="${filter}"></app-datepicker-filter>
    <app-datepicker filter="${filter}" date="${date}" ${closed ? 'closed' : ''}></app-datepicker>
    <app-timepicker time="${time}" date="${date}"></app-timepicker>
  </div>
  <div class="appointment-actions">
    <button class="save qa-button-save">save</button>
    <button class="cancel qa-button-cancel">cancel</button>
  </div>
  <div>
  <p class="appointment">
    ${isSaved ? `
        Good! Your appointment is set for ${date.toLocaleDateString()} at ${time}. Thanks!
    ` : ''}
    ${isCanceled ? `
        Good! Your appointment was canceled. Thanks!
    ` : ''}
  </p>
`;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_filter_template__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_filter_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_filter_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__datepicker_filter_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__filters_json__);




class DatepickerFilterComponent extends HTMLElement {
  static get selector () { return 'app-datepicker-filter' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__datepicker_filter_template__["a" /* default */])({
      selectedFilter: this.getAttribute('filter'),
      filters: __WEBPACK_IMPORTED_MODULE_2__filters_json___default.a,
    })

    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__datepicker_filter_css___default.a}</style>
      ${innerHTML}
    `

    this.addEventListeners()
  }

  addEventListeners () {
    this.element.querySelectorAll('input')
      .forEach(element => element.addEventListener('change', () => this.selectFilter(element.value)))
  }

  selectFilter (filter) {
    this.dispatchEvent(new CustomEvent('selected-filter', { detail: filter }))
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DatepickerFilterComponent;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({ filters, selectedFilter }) => {
    const isSelectedFilter = filter => filter === selectedFilter
    return `
      <div id="filter-wrapper">
        <p>Filter calendar by:</p>
        <div class="filter-calendar">
          ${filters.map(filter => `
            <label>
                <input class="qa-button" type="radio" name="calendar-filter" value="${filter.value}" ${isSelectedFilter(filter.value) ? 'checked' : ''}>
                ${filter.label}
            </label>
    `     ).join('')}
        </div>
      </div>

    `
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_template__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__datepicker_css__);



class DatepickerComponent extends HTMLElement {
  static get selector () { return 'app-datepicker' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.setInitialDate()
    this.render()
  }

  get selectedDate () {
    return new Date(this.selectedYear, this.selectedMonth, this.selectedDay)
  }

  render () {
    let selectedDateEmpty = new Date(this.selectedYear, this.selectedMonth, 1)
    selectedDateEmpty = selectedDateEmpty.getDay()
    const emptyDays = []

    for (let i = 0; i < selectedDateEmpty; i++) {
      emptyDays.push(i)
    }

    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__datepicker_template__["a" /* default */])({
      selectedYear: this.selectedYear,
      selectedMonth: this.selectedMonth,
      selectedDay: this.selectedDay,
      selectedDate: this.selectDateOnCalendar,
      inputDate: this.inputDate,
      emptyDays,
      filter: this.getAttribute('filter'),
      closed: this.hasAttribute('closed')
    })

    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__datepicker_css___default.a}</style>
      ${innerHTML}
    `

    this.datepicker = this.element.querySelector('.ui-datepicker')

    this.addEventListeners()
  }

  addEventListeners () {
    this.element.querySelectorAll('.day').forEach(element => element.addEventListener('click', () => this.selectDate(element.textContent)))
    this.element.querySelector('#nextMonth').addEventListener('click', () => this.nextMonth())
    this.element.querySelector('#prevMonth').addEventListener('click', () => this.prevMonth())
    this.element.querySelector('#inputDate').addEventListener('click', () => this.toggleDatepicker())
  }

  nextMonth () {
    if (this.selectedMonth === 11) {
      this.selectedYear++
      this.selectedMonth = 0
    } else {
      this.selectedMonth++
    }
    this.render()
    this.dispatchEvent(new CustomEvent('next-month'))
  }

  prevMonth () {
    if (this.selectedMonth === 0) {
      this.selectedYear--
      this.selectedMonth = 11
    } else {
      this.selectedMonth--
    }
    this.render()
    this.dispatchEvent(new CustomEvent('prev-month'))
  }

  static get observedAttributes() { return ['closed'] }

  attributeChangedCallback() {
    if (this.element) {
      this.render()
    }
  }

  open () {
    this.removeAttribute('closed')
  }

  close () {
    this.setAttribute('closed', true)
  }

  toggleDatepicker () {
    const isClosed = this.hasAttribute('closed')
    if (isClosed) {
      this.open()
    } else {
      this.close()
    }
    this.dispatchEvent(new CustomEvent('toggle-input'))
  }

  setInitialDate () {
    const date = new Date(this.getAttribute('date'))
    this.selectedYear = date.getFullYear()
    this.selectedMonth = date.getMonth()
    this.selectedDay = date.getDate()
    this.selectDateOnCalendar = this.selectedDate
    this.inputDate = this.selectedDate.toLocaleDateString()
  }

  selectDate (day) {
    this.selectedDay = parseInt(day)
    this.selectDateOnCalendar = this.selectedDate
    this.inputDate = this.selectedDate.toLocaleDateString()
    this.dispatchEvent(new CustomEvent('selected-date', { detail: this.selectDateOnCalendar }))
    this.close()
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DatepickerComponent;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const range = n => Array.from({ length: n }, (value, key) => key + 1)

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const weekdaysNum = [1, 2, 3, 4, 5]
const weekendsNum = [0, 6]

/* harmony default export */ __webpack_exports__["a"] = ({ selectedYear, selectedMonth, selectedDay, selectedDate, inputDate, emptyDays, filter, closed }) => {
  const isDayLessThanToday = day => new Date(selectedYear, selectedMonth, day + 1).getTime() < new Date().getTime()
  const isLeapYear = () => !!(selectedMonth === 1 && ((selectedYear % 4 === 0) && (selectedYear % 100 !== 0)) || (selectedYear % 400 === 0))

  return `
    <input id="inputDate" type="text" readonly value="${inputDate}" placeholder="Choose a date..."><img src="assets/ic_date_range.svg">
    <div class="ui-datepicker" ${closed ? 'hidden' : ''}>
      <div class="datepicker-header">
        <button id="prevMonth"><img src="/assets/ic_navigate_before.svg"></button>
        <h5>${months[selectedMonth]} ${selectedYear}</h5>
        <button id="nextMonth"><img src="/assets/ic_navigate_next.svg"></button>
      </div>
      <ul class="datepicker-nav">
        ${weekdays.map(day => `
          <li>${day.slice(0, 2)}</li>
        `).join('')}
      </ul>
      <div class="datepicker-days">
      ${emptyDays.map(empty => `
        <span class="day empty-day"></span>
      `).join('')}

      ${range(isLeapYear() ? 29 : daysInMonth[selectedMonth]).map(day => `
        <button class="day ${parseInt(selectedDay) === day && selectedDate.getMonth() === selectedMonth && selectedDate.getFullYear() === selectedYear ? 'selected' : ''}"
          ${filter === 'weekdays' && !weekdaysNum.includes(new Date(selectedYear, selectedMonth, day).getDay()) ? 'disabled' : ''}
          ${filter === 'weekends' && !weekendsNum.includes(new Date(selectedYear, selectedMonth, day).getDay()) ? 'disabled' : ''}
          ${isDayLessThanToday(day) ? 'disabled' : ''}>
          ${day}
        </button>
      `).join('')}
      </div>
    </div>
  `
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timepicker_template__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timepicker_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__timepicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_generator_service__ = __webpack_require__(2);




const isToday = date => date.toDateString() === (new Date()).toDateString()

class TimepickerComponent extends HTMLElement {
  static get selector () { return 'app-timepicker' }

  constructor () {
    super()
    this.timeGenerator = new __WEBPACK_IMPORTED_MODULE_2__time_generator_service__["a" /* TimeGeneratorService */]()
  }

  connectedCallback () {
    const date = new Date(this.getAttribute('date'))
    this.element = this.attachShadow({ mode: 'open' })
    this.times = isToday(date) ? this.timeGenerator.currentDayTimes : this.timeGenerator.times
    this.render()
  }

  render () {
    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timepicker_template__["a" /* default */])({
      times: this.times,
      selectedTime: this.getAttribute('time'),
    })

    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__timepicker_css___default.a}</style>
      ${innerHTML}
    `

    this.addEventListeners()
  }

  addEventListeners () {
    this.element.querySelector('select')
      .addEventListener('change', ({ target }) => this.selectTime(target.value))
  }

  selectTime (time) {
    this.dispatchEvent(new CustomEvent('selected-time', { detail: time }))
    console.debug('SELECTED TIME', time)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TimepickerComponent;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({ times, selectedTime }) => {
    const isSelectedTime = time => time === selectedTime
    return `
      <select class="qa-button">
        ${times.map(time => `
          <option class="qa-selected" ${isSelectedTime(time) ? 'selected': ''}>${time}</option>
        `).join('')}
      </select>
      <img src="assets/ic_schedule.svg">
    `
};



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map