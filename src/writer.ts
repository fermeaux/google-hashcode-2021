import fs from 'fs'
import { Solution } from './models'

export function write (fileName: string, solution: Solution): void {
  if (process.env.DEBUG === 'true') return
  fs.writeFileSync(`outputs/${fileName}.out`, stringifySolution(solution))
}

function stringifySolution (solution: Solution): string {
  return 'Hello World'
}
