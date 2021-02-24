import { parse } from './parser.mjs'
import { read } from './reader.mjs'
import { resolve } from './resolver.mjs'
import { write } from './writer.mjs'

console.log('===== START PROGRAM =====')
const inputs = read()
console.log('INPUTS : ', inputs)
const datas = parse(inputs)
console.log('DATAS : ', datas)
const solutions = resolve(datas)
console.log('SOLUTIONS : ', datas)
write(solutions)
console.log('===== END PROGRAM =====')
