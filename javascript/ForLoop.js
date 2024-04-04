let courses = ["Javacript", "Java", "Angular", "React"];

let i; // counter for the for-loop
let length = courses.length; //total number of courses (Array) 

let space = " "; // Home made space

// #########  FOR LOOP #########
for (i = 0; i < length; i++) 
{
    courses[i] += space ;   
}
console.log(courses) 

//Lets display text five times according to the number of days in a week
const n = 5

for(let i=1; i<=n; i++)
{
    console.log(`Lets code in JavaScript ` + i + ` days of week`)
}



