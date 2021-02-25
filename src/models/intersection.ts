import { Street } from './street'

export class Intersection {
    id: number
    incoming: Street[]
    incomingFiltered: Street[]
    outcoming: Street[]
    carsTraveling: number

    constructor () {
      this.incoming = []
      this.incomingFiltered = []
      this.outcoming = []
      this.carsTraveling = 0
    }
}
