// function lastWeek() {
//     return getDateRange(3600 * 1000 * 24 * 7)
// }

export function formatDate(date, fmt) {
  if (typeof date === 'string') {
    return date
  }

  if (!fmt) fmt = 'yyyy-MM-dd hh:mm:ss'

  console.log(date)
  if (!date) return null
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

export function getStartAndEndDateArrayByInterval(interval) {
  const { start, end } = getDateRange(interval)
  return {
    startDateArray: [start.getFullYear(), start.getMonth() + 1, start.getDate()],
    endDateArray: [end.getFullYear(), end.getMonth() + 1, end.getDate()]
  }
}

export function getDateRange(interval) {
  const end = new Date()
  const start = new Date()
  console.log(end)
  console.log(start)
  start.setTime(start.getTime() - interval)
  console.log('----------------')
  console.log(start)
  console.log(start.getMonth())
  console.log(end)
  return { start, end }
}
