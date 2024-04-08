//Defining object
//all functions need to be in objects
const Person = {

    // data properties
    //key       value
    firstName: 'Jasmine',

    //accessor properties (getter)
    get getName(){
        return this.firstName;
    },

    set changeName(newName){ // A parameter for re-assigning or mapping new values
        this.firstName = newName // takes the firstname and re-assignes to new name
    }
}
//End of the object

// this whole print is from get method 
console.log(Person) // This is just an object
console.log(Person.firstName) // This is called accessing data properties
console.log(Person.getName)// This is called accessing using getter method
//end of get method


//set method starts here to re-assign{
    Person.changeName = "Alison";
    console.log(Person.firstName)
//}
