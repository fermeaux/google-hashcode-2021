import { Car } from './car'
import { Intersection } from './intersection'

export class Street {
    begin: Intersection
    end: Intersection
    duration: number
    name: string
    isGreen: boolean
    cars: Car[]
    carsTraveling: number

    constructor () {
      this.cars = []
      this.carsTraveling = 0
    }
}
