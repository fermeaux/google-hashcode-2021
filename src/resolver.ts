import { Car, Data, Solution, Street } from "./models";

export function resolve(data: Data): Solution {
  return {};
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
};
