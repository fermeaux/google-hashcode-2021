import { Street } from './street'

export class Intersection {
    id: number
    incoming: Street[]
    outcoming: Street[]
}
