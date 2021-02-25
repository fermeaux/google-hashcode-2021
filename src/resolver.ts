import { Car, Data, Solution, Street } from './models'
import { Schedule } from './models/schedule'

export function resolve (data: Data): Solution {
  const { streets, intersections, duration, filteredCars } = data.simulation
  const filteredStreet = streets.filter(street => street.carsTravelingOnStreet > 0)

  // Filters intersections and building first schedules.
  // const {schedules, filteredIntersections} = computeIntersectionOnlyOneIncomingStreet(intersectionMap, duration)
  // console.log(filteredIntersections)

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
      let totalNumberOfCarsGoingThrough = 0

      for (const street of intersection.incoming) {
        totalNumberOfCarsGoingThrough += street.carsTravelingOnStreet
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

const computeNumberOfCarsTravelingOnStreet = (
  cars: Car[],
  street: Street
): number => {
  let numberOfCar = 0
  for (const car of cars) {
    if (car.route.find((carOnStreet) => carOnStreet.name === street.name)) {
      numberOfCar++
    }
  }
  return numberOfCar
}
