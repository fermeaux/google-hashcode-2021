import fs from 'fs'
import { Solution } from './models'
import { Schedule } from './models/schedule'

export function write (fileName: string, solution: Solution): void {
  if (process.env.DEBUG === 'true') return
  fs.writeFileSync(`outputs/${fileName}.out`, stringifySolution(solution))
}

function stringifySolution (solution: Solution): string {
  let res = ''
  res += solution.schedules.length + '\n'
  solution.schedules.forEach(schedule => {
    res += stringifySchedule(schedule)
  })
  return res
}

function stringifySchedule (schedule: Schedule): string {
  let res = ''
  res += `${schedule.intersection.id}\n`
  res += `${schedule.cycleTrafficLight.length}\n`
  schedule.cycleTrafficLight.forEach(cycle => (res += `${cycle.streetName} ${cycle.openTime}\n`))
  return res
}
