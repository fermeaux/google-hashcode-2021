import { Data, Input } from './models';

export function parse (inputs: Input[]): Data[] {
    const datas = inputs.map(input => ({}))
    return datas
}
