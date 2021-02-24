import { parse } from './parser.mjs'
import { read } from './reader.mjs'
import { resolve } from './resolver.mjs'
import { write } from './writer.mjs'

const inputs = read()
const datas = parse(inputs)
const solutions = resolve(datas)
write(solutions)
