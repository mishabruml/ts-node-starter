export const take = (array: any[], nItems: Number) => {
  if (nItems === Infinity) { throw new Error('cannot populate array infinitely') }
  const result: any[] = []
  for (let index = 0; index < nItems; index++) {
    result.push(array[index % array.length])
  }
  return result
}
