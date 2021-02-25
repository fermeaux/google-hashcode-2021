import { Car } from './car'
import { Intersection } from './intersection'
import { Street } from './street'

export class Simulation {
    duration: number
    cars: Car[]
    carCount: number
    intersections: Intersection[]
    intersectionCount: number
    streets: Street[]
    streetCount: number
    scoreToDestination: number
    timeUntilEnd: number
}
