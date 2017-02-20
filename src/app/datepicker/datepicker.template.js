const range = n => Array.from({ length: n }, (value, key) => key + 1)

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const weekdaysNum = [1, 2, 3, 4, 5]
const weekendsNum = [0, 6]

export default ({ selectedYear, selectedMonth, selectedDay, selectedDate, inputDate, emptyDays, filter, closed }) => {
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
}
