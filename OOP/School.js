let school = {
    name: 'Randburg High School',
    established: '1973',
    location: 'Gauteng',
    learners: 100,

    // Create a function that fetches school propeties and attributes
    displayinfo : function(){
        //using callback function
        console.log(`The name of the school is ${school.name}, located in ${school.location}. It was established in ${school.established} and began with ${school.learners} learners.`)
    },
    //end of function display info

    hardData : function(){
        //using object iteration function
        console.log("The name of the school is " + school.name + "\n" + "Located in " + school.location + "\n" + "established in " + school.established)
    },

    notationData : function(){
        //using notation function
        console.log("The name of the school is " + school['name'])
    }

}//end of object

//calling function
//access functions
school.displayinfo()
school.hardData()
school.notationData()