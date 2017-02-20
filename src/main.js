import { DatepickerComponent } from './app/datepicker/datepicker.component'
import { DatepickerFilterComponent } from './app/datepicker-filter/datepicker-filter.component'
import { TimepickerComponent } from './app/timepicker/timepicker.component'
import { AppointmentComponent } from './app/appointment/appointment.component'

const components = [
  DatepickerComponent,
  DatepickerFilterComponent,
  TimepickerComponent,
  AppointmentComponent
]

components.forEach(component => customElements.define(component.selector, component))
