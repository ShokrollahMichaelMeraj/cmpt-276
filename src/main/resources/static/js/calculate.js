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
let dynamicdata= 
[
    {
        "lettergrade": "A+",
        "percentage": 95,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "A",
        "percentage": 90,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "A-",
        "percentage": 85,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "B+",
        "percentage": 80,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "B",
        "percentage": 75,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "B-",
        "percentage": 70,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "B+",
        "percentage": 80,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "B",
        "percentage": 75,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "B-",
        "percentage": 70,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "C+",
        "percentage": 65,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "C",
        "percentage": 60,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "C-",
        "percentage": 55,
        "studentsinthisrange": 0,
    },{
        "lettergrade": "D",
        "percentage": 50,
        "studentsinthisrange": 0,
    },
    {
        "lettergrade": "F",
        "percentage": 0,
        "studentsinthisrange": 0,
    }
    
]

var grades = []; //array with the student grades




function isNumber(value) { // should be the .value of the input, not the element by id. 
    const tempvar = parseFloat(value);// creates a temporary value and allows us to only get numbers.
  
    // if not a number, only return an alrt asking for number input. and return 0
    if (isNaN(tempvar)) { 
      alert('Please enter a number.'); 
      return 0;
    } else { // return 1 if input is number
      return 1;
    }
}

function inrange(inputvalue) {
    var tempmax = parseFloat(document.getElementById("Mlb").value);
    var tempf = parseFloat(document.getElementById("Flb").value);
    if ( inputvalue >= tempf && inputvalue <= tempmax ){
        return 1;
    }else{
        alert ("Please give a number between " + tempf + " and " + tempmax + ".");
        return 0;
    }

}


function handleEnter(event) {
    if (event.key === 'Enter') {
        addNewgrade();
    }
}

function addNewgrade() {
    //get the value of the new inputed grade and check to see if it a number
    var tempholder = document.getElementById("newgradeid").value;
    var tempnewgrade = parseFloat (tempholder).toFixed(2);
    
    //check to see if it is a number and is it between the range that we want.
    if ( isNumber(tempnewgrade) && inrange(tempnewgrade)){
        grades.push(tempnewgrade); //push the new grade to the array.
        var templbtable = document.getElementById("lowerbound-table-id");
        // loop through each row of the lowerbounds table
        // go the the cell which contains the percentage lowerbound. 
        // check if the newgrade is bigger than the value /percentage inside that cell. remember the index of the row.
        // Run a function that goes to the same letter grade where that new grade was inputed.
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }





    }else{
        alert ("Invalid Input.")
       return 0;
    }
    
    
    window.alert(tempnewgrade);

    //if (tempnewgrade)

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

