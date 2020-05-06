const isAdult = (x) => x >= 18

const canDrink = x => x >= 21

export default x => x >= 65 ? console.log('you are a senior') : console.log('you are not a senior')

export { isAdult, canDrink }