const range = (start, end, step = 1) => Array.from({ length: Math.floor((end - start) / step) }, (v, k) => k * step + start)

export class TimeGeneratorService {
  constructor () {
    this.minutesInterval = 15
    this.currentDate = new Date()
  }

  get timesInDecimal () {
    return range(0, 24, this.convertMinutesToDecimal(this.minutesInterval))
  }

  get times () {
    return this.timesInDecimal.map(decimal => this.convertDecimalToTime(decimal))
  }

  get currentDayTimes () {
    const currentHour = this.currentDate.getHours()
    const currentMinute = this.currentDate.getMinutes()
    const currentTimeInDecimal = currentHour + this.convertMinutesToDecimal(currentMinute)
    const currentDayTimesInDecimal = this.timesInDecimal.filter(time => time > currentTimeInDecimal)
    return currentDayTimesInDecimal.map(decimal => this.convertDecimalToTime(decimal))
  }

  convertDecimalToTime (decimal) {
    let timeZone = 'AM'
    let hour = parseInt(decimal)
    const minutesInDecimal = parseFloat(decimal % 1)
    const minutes = this.convertDecimalToMinutes(minutesInDecimal)

    if (hour > 12) {
      timeZone = 'PM'
      hour -= 12
    }

    return `${this.normalize00(hour)}:${this.normalize00(minutes)} ${timeZone}`
  }

  convertMinutesToDecimal (minutes) {
    return minutes / 60
  }

  convertDecimalToMinutes (decimal) {
    return decimal * 60
  }

  normalize00 (value) {
    return value === 0 ? '00' : value
  }
}
