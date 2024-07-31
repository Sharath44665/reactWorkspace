class Car{
    constructor(name){
        this.brand = name;
    }

    present(){
        return "i have "+this.brand;
    }
}

class Model extends Car{
    constructor(name, carModel){
        super(name)
        this.brandModel= carModel;
    }

    show(){
        return this.present()+" model is: "+this.brandModel;
    }
}

const mycar = new Model("Ford", "Mustang");
result = mycar.show();
console.log(result)