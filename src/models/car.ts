import { Street } from './street'

export class Car {
    id: number
    route: Street[]

    constructor () {
      this.route = []
    }
}
