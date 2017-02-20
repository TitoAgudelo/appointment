export default ({ times, selectedTime }) => {
    const isSelectedTime = time => time === selectedTime
    return `
      <select class="qa-button">
        ${times.map(time => `
          <option class="qa-selected" ${isSelectedTime(time) ? 'selected': ''}>${time}</option>
        `).join('')}
      </select>
      <img src="assets/ic_schedule.svg">
    `
}

