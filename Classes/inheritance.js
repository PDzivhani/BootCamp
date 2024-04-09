class person{
    constructor(fname){
        this.fname = fname;
    }
    toString(){
        return (`name of this person: ${this.fname}`)
    }  
}

class student extends person{
    constructor(fname, id){
        // we introduce super keyword for calling the above class constructor
        super(fname);
        this.id = id;

    }
    toString() {
        return (`${super.toString()}, with student id: ${this.id}`)
    }
}//end of inheritenfsubtrscjt

let student1 = new student('Aliise', 7656);
console.log(student1) //object return data
console.log(student1.toString())
