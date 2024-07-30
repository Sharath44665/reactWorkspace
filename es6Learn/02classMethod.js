class Car{
    constructor(name){
        this.brand = name;
    }

    present(){
        return "i have "+this.brand;
    }
}

const newCar = new Car("Ford");
val = newCar.present();
console.log(val)