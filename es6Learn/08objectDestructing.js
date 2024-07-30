const vehicleDemo = {
    brand: "ford",
    model: "Mustang",
    type: "car",
    year: 2024,
    color: "red"
}

getVehicle(vehicleDemo);

function getVehicle({type, color, brand, model}){
    console.log("my " +type+ " is a color of: "+color+ ", brand name: "+brand+", model: "+model)
}

const person = {
    name: 'Jesse',
    age: 30, 
    address: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  displayMessage(person)

function displayMessage({ address:{state}}) {
console.log('I live in ' + state + '.');
}