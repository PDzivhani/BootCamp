function person(fname, lname){
    let firstname = fname;
    let lastname = lname

    //using the let ,the methof=d converted to a private method
    let getDetails_noAccess = function(){
        return (`First name is ${firstname}, and last name is ${lastname} `)
    }
    this.getDetails_Access = function(){
        return (`First name is ${firstname}, and last name is ${lastname} `)
    } 
} // end of function\
let person2 = new person('Alice', 'Jones')
console.log(person2.firstname)

console.log(person2.getDetails_noAccess);
console.log(person2.getDetails_Access())
