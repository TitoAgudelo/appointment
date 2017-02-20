import template from './datepicker-filter.template'
import style from './datepicker-filter.css'
import filters from './filters.json'

export class DatepickerFilterComponent extends HTMLElement {
  static get selector () { return 'app-datepicker-filter' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = template({
      selectedFilter: this.getAttribute('filter'),
      filters,
    })

    this.element.innerHTML = `
      <style>${style}</style>
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
