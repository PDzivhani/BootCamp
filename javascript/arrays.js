
let courses = ["Javascript", "Java", "Angular", "React"];// Pre-defined array of courses
courses.length = 4;

courses[4] = "Typescript";
courses[5] = "Vue";

console.log("Number of courses available: " + courses);
//checks if the array is an object or string 
console.log(typeof courses)

//injecting multiple values into a single array
courses.push(["C++", "Flutter", "C#", "Python"]);
console.log( "New semester courses: " + courses);
//check if the array is an array method
console.log(`courses are an array: ${courses instanceof Array}`)
console.log("Is this still an array? " + Array.isArray(courses))


//############ ARRAYS TO STRING
let faculty = courses.toString()

console.log(`courses are an arraty: ${faculty instanceof Array}`)
console.log("Courses as String " + faculty)
console.log(typeof faculty)
console.log(faculty.toUpperCase())

//####### undefined array
let learners = new Array();

learners[0] = 1
learners[1] = 2
learners[2] = 3
learners[3] = 4
learners[4] = 5
learners[5] = 6

console.log(`Total number of learners: ${learners.length}`)
