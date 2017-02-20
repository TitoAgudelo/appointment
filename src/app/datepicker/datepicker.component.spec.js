import { DatepickerComponent } from './datepicker.component'

describe('DatepickerComponent', () => {
  let component
  let element

  beforeAll(() => {
    customElements.define(DatepickerComponent.selector, DatepickerComponent)
  })

  beforeEach(() => {
    component = document.createElement(DatepickerComponent.selector)
    document.body.appendChild(component)
    element = component.element
  })

  afterEach(() => {
    component.remove()
  })

  it('should create', () => {
    expect(component).toEqual(jasmine.any(DatepickerComponent))
  })

  it('handles the click on open calendar', () => {
    element.querySelector('#inputDate').click()
    var datepicker = element.querySelector('.ui-datepicker').hasAttribute('hidden')
    expect(datepicker).toBe(true)
  })

  it('handles the click on open calendar and click select date', () => {
    const eventSpy = jasmine.createSpy();
    component.addEventListener('selected-date', eventSpy)
    element.querySelector('#inputDate').click()
    element.querySelector('.day').click()

    expect(eventSpy).toHaveBeenCalled()
  })

  it('handles the click on open calendar and click next month', () => {
    const eventSpy = jasmine.createSpy();
    component.addEventListener('next-month', eventSpy)
    element.querySelector('#inputDate').click()
    element.querySelector('#nextMonth').click()

    expect(eventSpy).toHaveBeenCalled()
  })

  it('handles the click on open calendar and click prev month', () => {
    const eventSpy = jasmine.createSpy();
    component.addEventListener('prev-month', eventSpy)
    element.querySelector('#inputDate').click()
    element.querySelector('#prevMonth').click()

    expect(eventSpy).toHaveBeenCalled()
  })

})
