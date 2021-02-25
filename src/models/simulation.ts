import { Car } from './car'
import { Intersection } from './intersection'
import { Street } from './street'

export class Simulation {
    duration: number
    cars: Car[]
    carMap: Map<number, Car>
    carCount: number
    filteredCars: Car[]
    intersections: Intersection[]
    intersectionMap: Map<number, Intersection>
    intersectionCount: number
    streets: Street[]
    streetMap: Map<string, Street>
    streetCount: number
    scoreToDestination: number
    timeUntilEnd: number

    constructor () {
      this.cars = []
      this.carMap = new Map()
      this.filteredCars = []
      this.intersections = []
      this.intersectionMap = new Map()
      this.streets = []
      this.streetMap = new Map()
    }
}
