import { Car } from './car'
import { Intersection } from './intersection'

export class Street {
    begin: Intersection
    end: Intersection
    duration: number
    name: string
    isGreen: boolean
    cars: Car[]
}
