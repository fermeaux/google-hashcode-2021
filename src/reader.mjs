import fs from 'fs'

export function read () {
  const fileNames = fs.readdirSync('inputs').filter(fileName => fileName.endsWith('.in'))
  const inputs = fileNames.map(fileName => ({
    fileName: fileName.split('.')[0],
    content: fs.readFileSync(`inputs/${fileName}`).toString().trim().replace(/\r/g, '').split('\n')
  }))
  return inputs
}
