import fs from 'fs'
import { Solution } from './models'

export function write (solutions: Solution[]): void {
  solutions.forEach(solution => {
    fs.writeFileSync(`outputs/${solution.fileName}.out`, stringifySolution(solution))
  })
}

function stringifySolution (solution: Solution): string {
  return 'Hello World'
}
