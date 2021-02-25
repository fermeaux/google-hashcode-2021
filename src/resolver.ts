import {Car, Data, Intersection, Solution, Street} from './models'
import {Schedule} from "./models/schedule";

export function resolve(data: Data): Solution {
  let {cars, streets, intersections, intersectionMap, duration} = data.simulation
  const filteredCars = [];
  // Add metrics
  for(const car of cars) {
    car.optimalPathTime = computeOptimalPathTime(car);
    if(car.optimalPathTime <= duration) {
      filteredCars.push(car);
    }
  }
  // console.log(filteredCars);
  // Filters streets
  const filteredStreet = [];
  for(const street of streets) {
    street.carsTravelingOnStreet = computeNumberOfCarsTravelingOnStreet(filteredCars, street);
    if(street.carsTravelingOnStreet !== 0) {
      filteredStreet.push(street);
    }
  }
  // console.log(filteredStreet);

  // Filters intersections and building first schedules.
  // const {schedules, filteredIntersections} = computeIntersectionOnlyOneIncomingStreet(intersectionMap, duration)
  // console.log(filteredIntersections)

  const schedules: Schedule[] = []
  for(const intersection of intersections) {
    const nbIncomingStreets = intersection.incoming.length;

    if(nbIncomingStreets === 1) {
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
      let cycleTrafficLight = [];
      const totalNumberOfCarsGoingThrough = 0;

      for(const street of intersection.incoming) {
        totalNumberOfCarsGoingThrough += street.carsTravelingOnStreet;
        cycleTrafficLight.push({
          streetName: street.name,
          openTime: 1
        });
      }

      const schedule = {
        intersection,
        nbIncomingStreets,
        cycleTrafficLight
      }
      schedules.push(schedule)
    }
  }

  return {schedules };
}

const computeOptimalPathTime = (car: Car): number => {
  let cost = 0;

  for (const street of car.route) {
    cost += street.duration;
  }

  return cost;
};

const computeNumberOfCarsTravelingOnStreet = (
  cars: Car[],
  street: Street
): number => {
  let numberOfCar = 0;
  for (const car of cars) {
    if (car.route.find((carOnStreet) => carOnStreet.name === street.name)) {
      numberOfCar++;
    }
  }
  return numberOfCar;
}

const computeIntersectionOnlyOneIncomingStreet = (intersections: Map<number, Intersection>, duration: number): {schedules: Schedule[], filteredIntersections: Map<number, Intersection>} => {
  const intersectionsWithOnlyOneStreet = Array.from(intersections.values()).filter(intersection => intersection.incoming.length === 1)
  const schedules: Schedule[] = []
  intersectionsWithOnlyOneStreet.map(intersectionWithOnlyOneStreet => {
    const schedule = {
      intersection: intersectionWithOnlyOneStreet,
      nbIncomingStreets: 1,
      cycleTrafficLight: [{
        streetName: intersectionWithOnlyOneStreet.incoming[0].name,
        openTime: duration
      }]
    }
    schedules.push(schedule)
    intersections.delete(intersectionWithOnlyOneStreet.id)
    return intersectionWithOnlyOneStreet
  })

  return {schedules, filteredIntersections: intersections}
}
