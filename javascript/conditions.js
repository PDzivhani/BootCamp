  const gpa = 51;
    pass_mark = 50;
     const exp = 70;
   const dist = 85


//     const dnw = 0;

    // if (gpa >= pass_mark ) {
    //     console.log("You passed with: " + gpa)
    // }else if(pass_mark <= 50 && pass_mark < 55 ) {
    //     console.log("You passed with: " + avg)
    // }else if(pass_mark >= 55 && pass_mark < 70){
    //     console.log("You passed with: " + exp)
    // }else if(pass_mark >= 70 && pass_mark < 85 ){
    //     console.log("You missed a mark with: " + fail)
    // }else if(pass_mark >= 50 && pass_mark <= 85){
    //     console.log("You passed with: " + dist)
    // }

const pass_mark = 50;
var mark =90;

if (mark < pass_mark) 
{
    console.log("You failed")
} 
else if(mark >= pass_mark && mark < exp)
{
    console.log("You passed ")
}
else if(mark >= exp && mark < dist)
{
    console.log("You passed with an exemption")

}
else if(mark >= dist && mark <= 100)
{
    console.log("You passed with a distinction")
}
else
{
    console.log("undefined")
}