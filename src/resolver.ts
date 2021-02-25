import { Car, Data, Solution } from './models'

export function resolve (data: Data): Solution {
  return {}
}

const computeOptimalPathTime = (car: Car): number => {
  let cost = 0;

  for(const street of car.route) {
    cost += street.duration;
  }

  return cost;
}
