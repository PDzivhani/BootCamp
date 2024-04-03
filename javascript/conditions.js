const gpa = 51;
pass_mark = 50;
const exp = 70;
const dist = 85;
const avg = 55;
const fail = 47;
const dnw = 0;

if (gpa >= pass_mark ) {
    console.log("You passed with: " + gpa)
}else if(pass_mark >= 50 && pass_mark <= 55 ) {
    console.log("You passed with:" + pass_mark)
}else if(pass_mark >= 50 && pass_mark <= 70){
    console.log("You passed with: " + exp)
}else if(pass_mark >= 50 && pass_mark <= 47 ){
    console.log("You missed a mark with: " + fail)
}else if(pass_mark >= 50 && pass_mark <= 85){
    console.log("You passed with: " + dist)
}