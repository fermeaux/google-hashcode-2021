import { Car, Data, Input, Intersection, Simulation, Street } from './models'

export function parse (input: Input): Data {
  let simulation = new Simulation()
  simulation = parseFirstLine(input.lines[0], simulation)
  simulation = parseAllIntersections(simulation)
  simulation = parseAllStreets(input.lines.slice(1, simulation.streetCount + 1), simulation)
  simulation = parseAllCars(input.lines.slice(simulation.streetCount + 1), simulation)
  return { simulation }
}

function parseFirstLine (line: string, simulation: Simulation): Simulation {
  const [duration, intersectionCount, streetCount, carCount, scoreToDestination] = line.split(' ')
  simulation.duration = +duration
  simulation.intersectionCount = +intersectionCount
  simulation.streetCount = +streetCount
  simulation.carCount = +carCount
  simulation.scoreToDestination = +scoreToDestination
  return simulation
}

function parseAllIntersections (simulation: Simulation): Simulation {
  for (let i = 0; i < simulation.intersectionCount; i++) {
    simulation = parseIntersection(i, simulation)
  }
  return simulation
}

function parseIntersection (id: number, simulation: Simulation): Simulation {
  const intersection = new Intersection()
  intersection.id = id
  simulation.intersections.push(intersection)
  simulation.intersectionMap.set(id, intersection)
  return simulation
}

function parseAllStreets (lines: string[], simulation: Simulation): Simulation {
  lines.forEach(line => (simulation = parseStreet(line, simulation)))
  return simulation
}

function parseStreet (line: string, simulation: Simulation): Simulation {
  // eslint-disable-next-line no-unused-vars
  const [begin, end, name, duration] = line.split(' ')
  const street = new Street()
  street.name = name
  street.duration = +duration
  street.begin = simulation.intersectionMap.get(+begin)
  street.end = simulation.intersectionMap.get(+end)
  simulation.streets.push(street)
  simulation.streetMap.set(street.name, street)
  street.begin.outcoming.push(street)
  street.end.incoming.push(street)
  return simulation
}

function parseAllCars (lines: string[], simulation: Simulation): Simulation {
  lines.forEach((line, id) => (simulation = parseCar(line, id, simulation)))
  return simulation
}

function parseCar (line: string, id: number, simulation: Simulation): Simulation {
  const route = line.split(' ').slice(1)
  const car = new Car()
  car.id = id
  route.forEach(street => car.route.push(simulation.streetMap.get(street)))
  simulation.cars.push(car)
  simulation.carMap.set(car.id, car)
  return simulation
}
