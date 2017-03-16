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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_datepicker_datepicker_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_datepicker_filter_datepicker_filter_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_timepicker_timepicker_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_appointment_appointment_component__ = __webpack_require__(7);





const components = [
  __WEBPACK_IMPORTED_MODULE_0__app_datepicker_datepicker_component__["a" /* DatepickerComponent */],
  __WEBPACK_IMPORTED_MODULE_1__app_datepicker_filter_datepicker_filter_component__["a" /* DatepickerFilterComponent */],
  __WEBPACK_IMPORTED_MODULE_2__app_timepicker_timepicker_component__["a" /* TimepickerComponent */],
  __WEBPACK_IMPORTED_MODULE_3__app_appointment_appointment_component__["a" /* AppointmentComponent */]
]

components.forEach(component => customElements.define(component.selector, component))


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".components {\n  display: inline-flex;\n}\n\n.appointment-actions {\n  margin: 6em 0 3em;\n}\n\nbutton {\n  font-weight: normal;\n  color: #2b2b2b;\n  cursor: pointer;\n  height: 35px;\n  border-radius: 5px;\n  border: 1px solid #d6d6d6;\n  padding: 2px 25px;\n  background: #cccccc;\n  background: -webkit-linear-gradient(top, #ffffff 0%,#eeeeee 17%,#cccccc 100%);\n  background: linear-gradient(to bottom, #ffffff 0%,#eeeeee 17%,#cccccc 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#cccccc',GradientType=0 );\n  font-size: 14px;\n  margin-right: 1em;\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n    display: inline-block;\n    padding: 0 1em 0 0;\n}\n\np {\n    margin: 0;\n}\n\n#filter-wrapper {\n    padding: 0 1em 0 0;\n}\n\n.filter-calendar {\n    background-color: #FFFFFF;\n    padding: 1rem;\n    border-radius: 15px;\n    border: 1px solid #e0e0e0;\n    min-width: 200px;\n    margin-top: 1em;\n}\n\n.filter-calendar label {\n    width: 100%;\n    display: block;\n    margin: 10px 0;\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    width: 18em;\n}\n\ninput {\n    border-radius: 5px;\n    border: 1px solid #e0e0e0;\n    height: 24px;\n    min-width: 190px;\n    padding: 0 10px;\n}\n\nimg {\n    position: absolute;\n    width: 25px;\n    margin-left: 5px;\n}\n\n.ui-datepicker {\n    position: absolute;\n    top: 28px;\n    left: 0;\n    z-index: 1;\n    display: block;\n    width: 17em;\n    background-color: white;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.datepicker-header {\n    background: #cccccc;\n    background: -webkit-linear-gradient(top, #ffffff 0%,#eeeeee 17%,#cccccc 100%);\n    background: linear-gradient(to bottom, #ffffff 0%,#eeeeee 17%,#cccccc 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#cccccc',GradientType=0 );\n    color: #222222;\n    font-weight: bold;\n    min-height: 40px;\n    justify-content: space-around;\n    align-items: center;\n    display: flex;\n}\n\n.datepicker-header h5 {\n    margin: 5px;\n    font-family: Verdana,Arial,sans-serif;\n}\n\n.datepicker-header button {\n    position: relative;\n    height: 12px;\n    background-color: #323232;\n    border-radius: 50%;\n    width: 12px;\n    padding: 3px;\n    cursor: pointer;\n}\n\n.datepicker-nav {\n    list-style: none;\n    padding: 0;\n    display: inline-flex;\n    width: 100%;\n    justify-content: space-around;\n    font-weight: bold;\n    font-family: Verdana,Arial,sans-serif;\n    font-size: .9em;\n}\n\n.datepicker-days {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.datepicker-days .day {\n    font-family: Verdana,Arial,sans-serif;\n    box-sizing: border-box;\n    cursor: pointer;\n    font-weight: 400;\n    width: 14.2857143%;\n    -ms-flex-preferred-size: 14.2857143%;\n    flex-basis: 14.2857143%;\n    max-width: 40px;\n    height: 40px;\n    line-height: 40px;\n    margin: 0;\n    display: inline-block;\n    position: relative;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: right;\n    border: 1px solid #d3d3d3;\n    background-color: #e6e6e6;\n    font-weight: normal;\n    color: #555555;\n    padding-right: .2em;\n    font-size: .9em;\n}\n\n.datepicker-days .empty-day{\n    opacity: .35;\n    filter: Alpha(Opacity=35);\n    background-image: none;\n    cursor: none;\n    pointer-events: none;\n}\n\n.datepicker-days .day.selected {\n    border: 1px solid #fcefa1;\n    background-color: #fbf9ee;\n    color: #363636;\n}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n    position: relative;\n    width: 14em;\n}\n\nselect {\n    border-radius: 5px;\n    border: 1px solid #e0e0e0;\n    height: 24px;\n    min-width: 190px;\n    padding: 0 10px;\n}\n\nimg {\n    position: absolute;\n    width: 25px;\n    margin-left: 5px;\n    top: 0;\n    right: 5px;\n}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div id=\"filter-wrapper\">\n  <p>Filter calendar by:</p>\n  <div class=\"filter-calendar\">\n    <label>\n      <input type=\"radio\" name=\"calendar-filter\" value=\"any\" checked>\n      Any date\n    </label>\n    <label>\n      <input type=\"radio\" name=\"calendar-filter\" value=\"weekdays\">\n      Only weekdays\n    </label>\n    <label>\n      <input type=\"radio\" name=\"calendar-filter\" value=\"weekends\">\n      Only weekends\n    </label>\n  </div>\n</div>\n";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appointment_template__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointment_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appointment_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__appointment_css__);



class AppointmentComponent extends HTMLElement {
  static get selector () { return 'app-appointment' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__appointment_template__["a" /* default */])({
      date: this.date,
      time: this.time,
    })

    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__appointment_css___default.a}</style>
      ${innerHTML}
    `

    this.addEventListeners()
  }

  get formattedAppointment () {
    let appointment = ''

    if (this.date) {
      appointment += `${this.date.toLocaleDateString()} `
    }

    if (this.time) {
      appointment += `${this.time}`
    }

    return appointment
  }

  renderAppointmentDate () {
    this.element.querySelector('.date').innerHTML = this.formattedAppointment
  }

  renderAppointmentTime () {
    this.element.querySelector('.time').innerHTML = this.formattedAppointment
  }

  addEventListeners () {
    this.element.querySelector('app-datepicker').addEventListener('selected-date', ({ detail }) => this.updateDate(detail))
    this.element.querySelector('app-datepicker-filter').addEventListener('selected-filter', ({ detail }) => this.updateFilter(detail))
    this.element.querySelector('app-timepicker').addEventListener('selected-time', ({ detail })  => this.updateTime(detail))
    this.element.querySelector('.save').addEventListener('click', () => this.saveAppointment())
    this.element.querySelector('.cancel').addEventListener('click', () => this.cancelAppointment())
  }

  updateDate (date) {
    console.debug('updateDate', date)
    let timepicker = this.element.querySelector('app-timepicker')
    this.date = date
    timepicker.setAttribute('date', date)
    timepicker.render()
  }

  updateTime (time) {
    console.debug('updateTime', time)
    this.time = time
  }

  updateFilter(filter) {
    console.debug('updateFilter', filter)
    this.filter = filter
  }

  saveAppointment () {
    console.debug('SAVE')
    this.renderAppointmentDate()
    this.renderAppointmentTime()
  }

  cancelAppointment () {
    console.debug('CANCEL')
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppointmentComponent;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function template (strings, ...interpolatedValues) {
  return strings.reduce((total, current, index) => {
    total += current
    if (interpolatedValues.hasOwnProperty(index)) {
      total += String(interpolatedValues[index])
    }
    return total
  }, '')
}

/* harmony default export */ __webpack_exports__["a"] = ({ date, time }) => template`
  <div class="components">
    <app-datepicker-filter></app-datepicker-filter>
    <app-datepicker></app-datepicker>
    <app-timepicker date="${date}"></app-timepicker>
  </div>
  <div class="appointment-actions">
    <button class="save">save</button>
    <button class="cancel">cancel</button>
  </div>
  <div>
  <p class="appointment">Good! Your appointment is set for <span class="date">${date}</span> at <span class="time">${time}</span>. Thanks!</p>
`;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_filter_template_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_filter_template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__datepicker_filter_template_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_filter_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_filter_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__datepicker_filter_css__);



class DatepickerFilterComponent extends HTMLElement {
  static get selector () { return 'app-datepicker-filter' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__datepicker_filter_css___default.a}</style>
      ${__WEBPACK_IMPORTED_MODULE_0__datepicker_filter_template_html___default.a}
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_template__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__datepicker_css__);



class DatepickerComponent extends HTMLElement {
  static get selector () { return 'app-datepicker' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.setInitialDate()
    this.render()
  }

  get selectedDate() {
    return new Date(this.selectedYear, this.selectedMonth, this.selectedDay)
  }

  render () {
    let selectedDateEmpty = new Date(this.selectedYear, this.selectedMonth, 1)
    selectedDateEmpty = selectedDateEmpty.getDay()
    const emptyDays = [];

    for(let i = 0; i < selectedDateEmpty; i++) {
      emptyDays.push(i)
    }

    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__datepicker_template__["a" /* default */])({
      selectedYear: this.selectedYear,
      selectedMonth: this.selectedMonth,
      selectedDay: this.selectedDay,
      selectedDate: this.selectedDate.toLocaleDateString(),
      emptyDay: emptyDays
    })

    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__datepicker_css___default.a}</style>
      ${innerHTML}
    `

    this.addEventListeners()
  }

  addEventListeners () {
    this.element.querySelectorAll('.day')
      .forEach(element => element.addEventListener('click', () => this.selectDate(element.textContent)))
  }

  setInitialDate () {
    const date = new Date()
    this.selectedYear = date.getFullYear()
    this.selectedMonth = date.getMonth()
    this.selectedDay = date.getDate()
  }

  selectDate (day) {
    this.selectedDay = day
    this.render()
    this.dispatchEvent(new CustomEvent('selected-date', { detail: this.selectedDate }))
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DatepickerComponent;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function template (strings, ...interpolatedValues) {
  return strings.reduce((total, current, index) => {
    total += current
    if (interpolatedValues.hasOwnProperty(index)) {
      total += String(interpolatedValues[index])
    }
    return total
  }, '')
}

const range = n => Array.from({ length: n }, (value, key) => key + 1)

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/* harmony default export */ __webpack_exports__["a"] = ({ selectedYear, selectedMonth, selectedDay, selectedDate, emptyDay }) => template`
  <input type="text" readonly value="${selectedDate}"><img src="assets/ic_date_range.svg">
  <div class="ui-datepicker">
    <div class="datepicker-header">
      <button></button>
      <h5>${months[selectedMonth]} ${selectedYear}</h5>
      <button></button>
    </div>
    <ul class="datepicker-nav">
      ${weekdays.map(day => `
        <li>${day.slice(0, 2)}</li>
      `).join('')}
    </ul>
    <div class="datepicker-days">
    ${emptyDay.map(empty => `
      <span class="day empty-day"></span>
    `).join('')}

    ${range(daysInMonth[selectedMonth]).map(day => `
      <button class="day ${parseInt(selectedDay) === day ? 'selected' : ''}">${day}</button>
    `).join('')}
    </div>
  </div>
`;


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timepicker_template__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timepicker_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__timepicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_generator_service__ = __webpack_require__(12);




const isToday = date => date.toDateString() === (new Date()).toDateString()

class TimepickerComponent extends HTMLElement {
  static get selector () { return 'app-timepicker' }

  get currentDate () {
    const inputDate = this.getAttribute('date')
    return inputDate ? new Date(inputDate) : new Date()
  }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.getTimeGenerator()
  }

  render () {
    const innerHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timepicker_template__["a" /* default */])({ times: this.times })
    this.element.innerHTML = `
      <style>${__WEBPACK_IMPORTED_MODULE_1__timepicker_css___default.a}</style>
      ${innerHTML}
    `
    this.addEventListeners()
  }

  getTimeGenerator() {
    const timeGenerator = new __WEBPACK_IMPORTED_MODULE_2__time_generator_service__["a" /* TimeGeneratorService */]()
    this.times = isToday(this.currentDate) ? timeGenerator.currentDayTimes : timeGenerator.times
    this.render()
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function template (strings, ...interpolatedValues) {
  return strings.reduce((total, current, index) => {
    total += current
    if (interpolatedValues.hasOwnProperty(index)) {
      total += String(interpolatedValues[index])
    }
    return total
  }, '')
}

/* harmony default export */ __webpack_exports__["a"] = ({ times }) => template`
  <select>
    ${times.map(time => `
      <option>${time}</option>
    `).join('')}
  </select>
  <img src="assets/ic_schedule.svg">
`;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map