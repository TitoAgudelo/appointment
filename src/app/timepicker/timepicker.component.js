import template from './timepicker.template'
import style from './timepicker.css'
import { TimeGeneratorService } from './time-generator.service'

const isToday = date => date.toDateString() === (new Date()).toDateString()

export class TimepickerComponent extends HTMLElement {
  static get selector () { return 'app-timepicker' }

  constructor () {
    super()
    this.timeGenerator = new TimeGeneratorService()
  }

  connectedCallback () {
    const date = new Date(this.getAttribute('date'))
    this.element = this.attachShadow({ mode: 'open' })
    this.times = isToday(date) ? this.timeGenerator.currentDayTimes : this.timeGenerator.times
    this.render()
  }

  render () {
    const innerHTML = template({
      times: this.times,
      selectedTime: this.getAttribute('time'),
    })

    this.element.innerHTML = `
      <style>${style}</style>
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
