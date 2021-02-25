import { Data, Solution } from './models'
import { Schedule } from './models/schedule'

export function resolve (data: Data): Solution {
  const { streets, intersections, duration, filteredCars } = data.simulation
  const filteredStreet = streets.filter(street => street.carsTraveling > 0)

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

      for (const street of intersection.incoming) {
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
