import template from './datepicker.template'
import style from './datepicker.css'

export class DatepickerComponent extends HTMLElement {
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

    const innerHTML = template({
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
      <style>${style}</style>
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
