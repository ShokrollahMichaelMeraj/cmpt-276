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
        var templbtable = document.getElementById("lowerboundtableid");
        // loop through each row of the lowerbounds table
        // go the the cell which contains the percentage lowerbound. 
        // check if the newgrade is bigger than the value /percentage inside that cell. remember the index of the row.
        // Run a function that goes to the same letter grade where that new grade was inputed.
        for (var index= 0; index < templbtable.rows.length; index++) {

            
            var row = templbtable.rows[index];
            var secondCellvalue = parseFloat(row.cells[1].childNodes[0].value); 
        
            if(tempnewgrade >= secondCellvalue){
                
                //run a function that would go to the histogram table and add one to the number of studnts in that range.
                console.log(index);
                histogramupdate(index-1);
                break;

            } 
            
        }

    }else{
        //alert ("Invalid Input.")
       return 0;
    }
    
}

function recalcNewgrades(value) {
    //get the value of the new inputed grade and check to see if it a number
    var tempgrade = parseFloat (value).toFixed(2);
    //check to see if it is a number and is it between the range that we want.
    if ( isNumber(tempgrade) && inrange(tempgrade)){
        //push the new grade to the array.
        var templbtable = document.getElementById("lowerboundtableid");
        // loop through each row of the lowerbounds table
        // go the the cell which contains the percentage lowerbound. 
        // check if the newgrade is bigger than the value /percentage inside that cell. remember the index of the row.
        // Run a function that goes to the same letter grade where that new grade was inputed.
        for (var index= 0; index < templbtable.rows.length; index++) {

            
            var row = templbtable.rows[index];
            var secondCellvalue = parseFloat(row.cells[1].childNodes[0].value); 
        
            if(tempgrade >= secondCellvalue){
                
                //run a function that would go to the histogram table and add one to the number of studnts in that range.
                console.log(index);
                histogramupdate(index-1);
                break;

            } 
            
        }

    }else{
        //alert ("Invalid Input.")
       return 0;
    }
    
}

function histogramupdate(index) {
    var temphistogramtable = document.getElementById("histogramtableid");
    // console.log(temphistogramtable);
    // console.log(temphistogramtable.rows);
    var temprow = temphistogramtable.rows[index];
    // console.log(temprow);
    
    var tempcell= parseInt(temprow.cells[1].innerHTML);
    temprow.cells[1].innerHTML = tempcell +=1;
}

function histogramreset() {
    var temphistogramtable = document.getElementById("histogramtableid");
    // console.log(temphistogramtable);
    // console.log(temphistogramtable.rows);
    for (var index = 0; index < temphistogramtable.rows.length; index++) {
        var temprow = temphistogramtable.rows[index];
        // console.log(temprow);
        var tempcell= parseInt(temprow.cells[1].innerHTML);
        temprow.cells[1].innerHTML = 0;
    }

}


function dynamiclowerbound() {
    var temptable = document.getElementById("lowerboundtableid");

    for (var index= 0; index < temptable.rows.length; index++) {
        console.log(index);
        if (index === 0) {
            
            var row = temptable.rows[index];
            var temppercentage = parseFloat(row.cells[1].childNodes[0].value); 
            var rowbellow= temptable.rows[index+1];
            var percentagebellow = parseFloat(rowbellow.cells[1].childNodes[0].value); 
            if( (temppercentage <= 100) && (percentagebellow < temppercentage) ){
                

            } 
            else{
            alert("Invalid or overlapping lowerbound change detected!");
            break;
            }
    
         
            
        }
        else if(index === 11) {

            var row = temptable.rows[index];
            var temppercentage = parseFloat(row.cells[1].childNodes[0].value); 
            var rowabove = temptable.rows[index-1];
            var percentageabove = parseFloat(rowabove.cells[1].childNodes[0].value); 
            if( temppercentage < percentageabove && 0 <= temppercentage ){
        

            } 
            else{
            alert("Invalid or overlapping lowerbound change detected!");
            break;
            }
        }
        else{
            var temprow = temptable.rows[index];
            console.log(temppercentage);
            var temppercentage = parseFloat(temprow.cells[1].childNodes[0].value); 
            //isNumber(temppercentage);
            var rowbellow= temptable.rows[index+1];
            var percentagebellow = parseFloat(rowbellow.cells[1].childNodes[0].value);  
            var rowabove = temptable.rows[index-1];
            var percentageabove = parseFloat(rowabove.cells[1].childNodes[0].value); 
            if( (temppercentage > percentagebellow) && ( temppercentage < percentageabove) ){


            } 
            else{
            alert("Invalid or overlapping lowerbound change detected!");
          
            }
        }

        
    }
    //clear the histogram
    histogramreset();
    //we get a  grade array and loop through them.
    for (var i = 0; i < grades.length; i++) {
        //we loop through the table
        //we change the histogram
        recalcNewgrades(grades[i]);
        
    }
    //we loop through the table
    //we change the histogram
    

}

