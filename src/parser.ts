import { Car, Data, Input, Simulation, Street } from './models'

export function parse (input: Input): Data {
  let simulation = new Simulation()
  simulation = parseFirstLine(input.lines[0], simulation)
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
  simulation.streets.push(street)
  simulation.streetMap.set(street.name, street)
  return simulation
}

function parseAllCars (lines: string[], simulation: Simulation): Simulation {
  lines.forEach((line, id) => (simulation = parseCar(line, simulation, id)))
  return simulation
}

function parseCar (line: string, simulation: Simulation, id: number): Simulation {
  const route = line.split(' ').slice(1)
  const car = new Car()
  car.id = id
  route.forEach(street => car.route.push(simulation.streetMap.get(street)))
  simulation.cars.push(car)
  simulation.carMap.set(car.id, car)
  return simulation
}
