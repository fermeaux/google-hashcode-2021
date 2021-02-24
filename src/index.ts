import { parse } from './parser'
import { read } from './reader'
import { resolve } from './resolver'
import { write } from './writer'

console.log('===== START PROGRAM =====')
const inputs = read()
console.log('INPUTS : ', inputs)
const datas = parse(inputs)
console.log('DATAS : ', datas)
const solutions = resolve(datas)
console.log('SOLUTIONS : ', solutions)
write(solutions)
console.log('===== END PROGRAM =====')
