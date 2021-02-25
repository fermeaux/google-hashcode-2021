import { Street } from './street'

export class Car {
    id: number
    route: Street[]
    optimalPathTime?: number

    constructor () {
      this.route = []
    }
}
