import {Car, Data, Intersection, Solution, Street} from './models'
import {Schedule} from "./models/schedule";

export function resolve(data: Data): Solution {
  const {cars, streets, intersections, duration} = data.simulation

  const schedules = computeIntersectionOnlyOneIncomingStreet(intersections, duration);

  return {schedules};
}

const computeOptimalPathTime = (car: Car): number => {
  let cost = 0;

  for (const street of car.route) {
    cost += street.duration;
  }

  return cost;
};

const computeNumberOfCarTravelingOnStreet = (
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

const computeIntersectionOnlyOneIncomingStreet = (intersections: Intersection[], duration: number): Schedule[] => {
  const intersectionsWithOnlyOneStreet = intersections.filter(intersection => intersection.incoming.length === 1)
  const schedules: Schedule[] = []
  intersectionsWithOnlyOneStreet.map(intersectionWithOnlyOneStreet => {
    const schedule = {
      intersection: intersectionWithOnlyOneStreet,
      nbIncomingStreets: 1,
      CycleTrafficLight: [{
        streetName: intersectionWithOnlyOneStreet.incoming[0].name,
        openTime: duration
      }]
    }
    schedules.push(schedule)
    return intersectionWithOnlyOneStreet
  })

  return schedules
}
