import { TimepickerComponent } from './timepicker.component'

describe('TimepickerComponent', () => {
  let component
  let element

  beforeAll(() => {
    customElements.define(TimepickerComponent.selector, TimepickerComponent)
  })

  beforeEach(() => {
    component = document.createElement(TimepickerComponent.selector)
    document.body.appendChild(component)
    element = component.element
  })

  afterEach(() => {
    component.remove()
  })

  it('should create', () => {
    expect(component).toEqual(jasmine.any(TimepickerComponent))
  })

  /*it('handles the click on select time', () => {
    const eventSpy = jasmine.createSpy();
    component.addEventListener('selected-time', eventSpy)
    element.querySelector('.qa-button').click()
    element.querySelector('.qa-selected').click()

    expect(eventSpy).toHaveBeenCalled()
  })*/
})
