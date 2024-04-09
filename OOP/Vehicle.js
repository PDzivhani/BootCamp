class Vehicle{
    constructor(name, maker, engine, color)
    {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
        this.color = color;
        
    }
    //end of constructor

    getDetails(){
        return("The name of the vehicle is: " + this.name)
    }
}

//objects neeed to outside of class and built according to class
let sedan = new Vehicle('Etios', 'Toyota', '1.4', 'blue')

console.log(sedan.name);
console.log(sedan.maker);
console.log(sedan.engine);
console.log(sedan.color);
console.log(sedan.getDetails());