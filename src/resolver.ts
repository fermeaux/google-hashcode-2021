import { Data, Solution } from './models'

export function resolve (datas: Data[]): Solution[] {
  const solutions = datas.map(data => ({
    fileName: data.fileName
  }))
  return solutions
}