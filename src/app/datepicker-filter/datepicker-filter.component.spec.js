import { DatepickerFilterComponent } from './datepicker-filter.component'

describe('DatepickerFilterComponent', () => {
  let component
  let element

  beforeAll(() => {
    customElements.define(DatepickerFilterComponent.selector, DatepickerFilterComponent)
  })

  beforeEach(() => {
    component = document.createElement(DatepickerFilterComponent.selector)
    document.body.appendChild(component)
    element = component.element
  })

  afterEach(() => {
    component.remove()
  })

  it('should create', () => {
    expect(component).toEqual(jasmine.any(DatepickerFilterComponent))
  })

  it('handles the click on checkbox', () => {
    const eventSpy = jasmine.createSpy();
    component.addEventListener('selected-filter', eventSpy)
    element.querySelector('.qa-button').click()

    expect(eventSpy).toHaveBeenCalled()
  })
})
