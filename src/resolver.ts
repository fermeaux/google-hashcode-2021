import { Data, Solution } from './models'
import { Schedule } from './models/schedule'

export function resolve (data: Data): Solution {
  const { intersections, duration } = data.simulation

  const schedules: Schedule[] = []
  for (const intersection of intersections) {
    const nbIncomingStreets = intersection.incoming.length

    if (nbIncomingStreets === 1) {
      const schedule = {
        intersection: intersection,
        nbIncomingStreets: 1,
        cycleTrafficLight: [{
          streetName: intersection.incoming[0].name,
          openTime: duration
        }]
      }
      schedules.push(schedule)
    } else {
      const cycleTrafficLight = []

      for (const street of intersection.incomingFiltered) {
        cycleTrafficLight.push({
          streetName: street.name,
          openTime: 1
        })
      }

      const schedule = {
        intersection,
        nbIncomingStreets,
        cycleTrafficLight
      }
      schedules.push(schedule)
    }
  }

  return { schedules }
}
