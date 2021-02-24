import fs from 'fs'
import { Input } from './models'

export function read (): Input[] {
  const fileNames = fs.readdirSync('inputs').filter(fileName => fileName.endsWith('.in'))
  const inputs = fileNames.map(fileName => ({
    fileName: fileName.split('.')[0],
    lines: fs.readFileSync(`inputs/${fileName}`).toString().trim().replace(/\r/g, '').split('\n')
  }))
  return inputs
}
