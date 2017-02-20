export default ({ date, time, filter, isSaved, isCanceled , closed}) => `
  <div class="components">
    <app-datepicker-filter filter="${filter}"></app-datepicker-filter>
    <app-datepicker filter="${filter}" date="${date}" ${closed ? 'closed' : ''}></app-datepicker>
    <app-timepicker time="${time}" date="${date}"></app-timepicker>
  </div>
  <div class="appointment-actions">
    <button class="save qa-button-save">save</button>
    <button class="cancel qa-button-cancel">cancel</button>
  </div>
  <div>
  <p class="appointment">
    ${isSaved ? `
        Good! Your appointment is set for ${date.toLocaleDateString()} at ${time}. Thanks!
    ` : ''}
    ${isCanceled ? `
        Good! Your appointment was canceled. Thanks!
    ` : ''}
  </p>
`
