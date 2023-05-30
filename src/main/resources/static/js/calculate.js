// we need a few functions for the histogram application to work.
/* 
- the application can be divided into multiple parts:
    - lower bound 
    - histogram
    - and new grade

    - workflow:
        - there are default lowerbounds when loading the page.
        - those same lowerbounds are also stored and used for the histogram part of the web application.
            - this way we can get rid of making too many calculation.
                - there is interactivity between the two.
                - there is an array with letter grade, than percentage , than a number of students 
                - between that grade range   for each cellof the array.
                -  the second cell is changable depending on the new grades that are entered.
        - new grades are enetered and after checking is the grade is okay, 
            - calculation are made by comparing the grade to an array of grades 
            - which contain a letter grade and a percentage for that letter grade
            - the new grade is then checked to see where it belongs in the ranges and the adds +1 
            - to that range/ letter grade


        - a new grade event is trggered when a new grader is entered given and the enter key is pushed
            - when a new grade is entered:
            - it is first checked if it is a number,
            - if it is a number, then it is checked is

- 

*/
// console.log(document.getElementById("A+lb").value)

// function update(params) {
    
// }
// let grades = 
// [
//     {
//         "lettergrade": "A+",
//         "percentage": document.getElementById() ,
        
//         "studentsinthisrange": 0,
//     },
//     {
//         "lettergrade": "A",
//         "percentage": 90,
//         "studentsinthisrange": 0,
//     },
//     {
//         "lettergrade": "A-",
//         "percentage": 85,
//         "studentsinthisrange": 0,
//     },
//     {
//         "lettergrade": "A+",
//         "percentage": 95,
//         "studentsinthisrange": 0,
//     },
    
    
// ]






function newgrade() {
    //first of all check to see if it is a number,
    var tempnewgrade = parseFloat(document.getelementbyid("newgradeid")
        // if yes, than accept,
        // if not, give alert
    // get the id of the lowerbound table
    // checks if the new grade is bigger than MAX or smaller than F
    // if not then we proceed, BUT if yes, give alert
    // put the new grade into an array. 
    // go through the lowerbound table, and see where it belongs,
    // go through the histogram table and add one to the range of the letter grade that it belongs to
}


// function changelowerbound() {
//     //first of all check to see if it is a number,
//         // if yes, than accept,
//         // if not, give alert
//     // if the max of F kletter grade is being changed, we have to check 
//         //if MAX is smaller than or equal to 100 and bigger than the lettergrade bellow 
//         // if F is being chnaged, we have to check if it is bigger or equal to 0 and smaller than the letter grade above.
//     // check to see if the lowerbound enetered (not F/ max) is smaller than the above lettergrade and bigger than the bellow letter grade 
//     // if not, give alert
//     // if yes, accept and go loop through the histogram table, if 

    
// }


// function name() {
    
// }


// function name() {
    
// }

