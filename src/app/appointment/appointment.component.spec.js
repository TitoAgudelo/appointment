import { AppointmentComponent } from './appointment.component'

describe('AppointmentComponent', () => {
  let component
  let element

  beforeAll(() => {
    customElements.define(AppointmentComponent.selector, AppointmentComponent)
  })

  beforeEach(() => {
    component = document.createElement(AppointmentComponent.selector)
    document.body.appendChild(component)
    element = component.element
  })

  afterEach(() => {
    component.remove()
  })

  it('should create', () => {
    expect(component).toEqual(jasmine.any(AppointmentComponent))
  })

  it('handles the click on save button', () => {
    const eventSpy = jasmine.createSpy();
    component.addEventListener('custom-event', eventSpy)
    element.querySelector('.qa-button-save').click()

    expect(eventSpy).toHaveBeenCalled()
  })

  it('handles the click on cancel button', () => {
    const eventSpy = jasmine.createSpy();
    component.addEventListener('custom-event', eventSpy)
    element.querySelector('.qa-button-cancel').click()

    expect(eventSpy).toHaveBeenCalled()
  })
})
