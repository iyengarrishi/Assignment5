/**
 * @author
 */


/* Project Plan 
1. Load libraries (jQuery and Google JS)
2. Setup document.ready function
3. Load Google Visualization Library and create a callback function
4. Add data from external JSON file to callback function using .get function
5. Create an array of arrays of the data, using a for loop
6. Feed data to visualization library
7. Create a div in HTML file for visualization
8. Create a chart using the Google Viz library set the newly created div as its location
9. Render the chart
*/

console.log ("Loaded Page");

// 4) Let us set UNEMPLOYMENT as the local filename of the JSON file we just loaded. 

function stepThree(DATASET){
	console.log(DATASET);
// 5) Since we are only interested in the observations, we will now pull those out using a variable

 var pullOut = DATASET.observations;
 
// 6) We arrange the data we have as an array of arrays

 var ideserveArrays = [];
  
	
}

// 3) Now, we define the callback function for the Google Visualization Library

function stepTwo(){
	console.log ("Google has come to the party");
	
// 4) We load our data within this function using .get
// I will be safe and use the same data set from class.

$.get("UEMP270V_data.json", stepThree, "json");

//The .get includes file name, function name and file type
}

// 2) Next, we define the callback function for document ready

function stepOne(){
//Console log to make sure it is working
console.log("My document must be ready");

//Load Google Visualization library
google.load("visualization", "1", {packages:["corechart"], callback:"stepTwo"});
}





// 1) First, we set up document ready

$(document).ready(stepOne);