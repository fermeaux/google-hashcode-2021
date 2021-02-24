import fs from 'fs'
import { Input } from './models'

export function read (): Input[] {
  const fileNames = getFileNames()
  const inputs = fileNames.map(fileName => ({
    fileName: fileName.split('.')[0],
    lines: fs.readFileSync(`inputs/${fileName}`).toString().trim().replace(/\r/g, '').split('\n')
  }))
  return inputs
}

function getFileNames (): string[] {
  const inputs = process.env.INPUTS
  if (inputs === 'all') return fs.readdirSync('inputs').filter(fileName => fileName.endsWith('.in'))
  return inputs.replace(/ /g, '').split(',').map(fileName => `${fileName}.in`)
}
