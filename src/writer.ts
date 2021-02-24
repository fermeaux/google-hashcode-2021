import fs from 'fs'
import { Solution } from './models'

export function write (solutions: Solution[]): void {
  fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    if (err) return console.log(err)
    console.log('Hello World > helloworld.txt')
  })
}
