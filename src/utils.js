console.log('utils.js is running')

export const square = (x) => {
  return x * x
}

export const add = (a, b) => {
  return a + b
}
export default (a, b) => {
  return a - b
}


// export { square, add, subtract as default }