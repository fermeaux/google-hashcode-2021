import dotenv from 'dotenv'
import { parse } from './parser'
import { read } from './reader'
import { resolve } from './resolver'
import { write } from './writer'

dotenv.config()
console.log('===== START PROGRAM =====')

const inputs = read()
inputs.forEach((input) => {
  console.log('\n===== FILE NAME :', input.fileName)

  const data = parse(input)
  console.log('DATA : ', data)

  const solution = resolve(data)
  console.log('SOLUTION : ', solution)

  write(input.fileName, solution)
  console.log('====================\n')
})

console.log('===== END PROGRAM =====')
