const vehicles = ['car', 'f-150', 'expedition'];

const [car, truck , suv] = vehicles

console.log(car)
console.log(truck)
console.log(suv)

// If we only want the car and suv we can simply leave out the truck but keep the comma:
const another = ['mustang', 'f-150', 'expedition'];
const [anothercar,,anothersuv] = another

console.log(anothercar)
console.log(anothersuv)