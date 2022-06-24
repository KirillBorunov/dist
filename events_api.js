/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
const getEvents = (start, end) => {
  return new Promise((resolve, reject) => {
    const rnd = (a, b) => Math.floor((b - a + 1) * Math.random()) + a
    const formatDate = (a, withTime) => withTime
      ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
      : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    // console.log("getEvents api");
    const names = ['Meeting', 'Conference', 'Course 1', 'Course 2']
    const startDate = new Date(start.year, start.month - 1, start.day, 0, 0, 0)
    const endDate = new Date(end.year, end.month - 1, end.day, 23, 59, 59)
    console.log(startDate, endDate)
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / 86400000)
    const eventCount = rnd(days, days + 20)
    const events = {
      events: [],
      len: eventCount
    }
    for (let i = 0; i < eventCount; i++) {
      const allDay = rnd(0, 3) === 0
      const firstTimestamp = rnd(startDate.getTime(), endDate.getTime())
      if (i == 0) { console.log(startDate.getTime(), endDate.getTime(), firstTimestamp) }
      const first = new Date(firstTimestamp)
      if (i == 0) { console.log(startDate, endDate, first) }
      const secondTimestamp = rnd(2, allDay ? 288 : 8) * 900000
      const second = new Date(first.getTime() + secondTimestamp)

      events.events.push({
        name: names[rnd(0, names.length - 1)],
        start: formatDate(first, !allDay),
        end: formatDate(second, !allDay),
        type: Number(allDay)
      })
    }
    resolve(events)
  })
}

export { getEvents }
