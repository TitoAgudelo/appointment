import template from './appointment.template'
import style from './appointment.css'
import filters from '../datepicker-filter/filters.json'
import { TimeGeneratorService } from '../timepicker/time-generator.service'

export class AppointmentComponent extends HTMLElement {
  static get selector () { return 'app-appointment' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.setDefaultValues()
    this.render()
  }

  setDefaultValues () {
    const timeGenerator = new TimeGeneratorService()
    const time = timeGenerator.currentDayTimes[0]
    const filter = filters[0].value

    this.date = new Date()
    this.time = time
    this.filter = filter
    this.isSaved = false
    this.closed = true
  }

  render () {
    const innerHTML = template({
      date: this.date,
      time: this.time,
      filter: this.filter,
      isSaved: this.isSaved,
      isCanceled: this.isCanceled,
      closed: this.closed,
    })

    this.element.innerHTML = `
      <style>${style}</style>
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
