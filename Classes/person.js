class person{
    constructor(name, id ){
        this.name  = name;
        this.id = id;
    }
    //private method
    addAddress(address){
        this.address = address;
    }

    //public method
    getDetails(){
        console.log(`Name of a person is ${this.name}, residing at ${this.address}`)
    }
}

let person1 = new person('Bob', 10);
person1.addAddress('Limpopo');

//Abstraction
person1.getDetails();
