import { Data, Input, Simulation } from './models'

export function parse (input: Input): Data {
  let simulation = new Simulation()
  simulation = parseFirstLine(input.lines[0], simulation)
  simulation = parseAllStreets(input.lines.slice(1, simulation.streetCount + 1), simulation)
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
  return simulation
}
