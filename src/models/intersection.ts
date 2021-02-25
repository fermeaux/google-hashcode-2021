import { Street } from './street'

export class Intersection {
    id: number
    incoming: Street[]
    outcoming: Street[]
    carsTraveling: number

    constructor () {
      this.incoming = []
      this.outcoming = []
      this.carsTraveling = 0
    }
}
