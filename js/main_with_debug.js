/*
This script creates a table showing cities, populations, and population size type
with interactive features when users hover over and click on the table.
*/

// Create array of cities and populations
var cityPop = [
    {
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244 
    }
];

// Initialize functions called when the script loads
function initialize() {
    cities(cityPop);
    addColumns(cityPop);
    addEvents();
}

// Function to create a table with cities and their populations
function cities(cityPop) {
	    //create the table element
		var table = document.createElement("table");

		//create a header row
		var headerRow = document.createElement("tr");
	
		//add the "City" and "Population" columns to the header row
		headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
		//add the row to the table
		table.appendChild(headerRow);
	
		//loop to add a new row for each city
		for (var i = 0; i < cityPop.length; i++){
			//assign longer html strings to a variable
			var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
			//add the row's html string to the table
			table.insertAdjacentHTML('beforeend',rowHtml);
		}
	
		document.querySelector("#mydiv").appendChild(table);
	}

// Function to add column to table categorizing the population size of each city	
function addColumns(cityPop){
	document.querySelectorAll("tr").forEach(function(row, i){
    	if (i == 0){
    		// insert "City Size" in header
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
    		// check each population size and assign a category to it
			var citySize;
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};
			// insert population size category into table
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

// Function for event listener to change the table background when mouse hovers over table
function addEvents() {
	document.querySelector("table").addEventListener("mouseover", function () {
	  var color = "rgb(";
	  // generate random numbers to assign to RGB values for background color
	  for (var i = 0; i < 3; i++) {
		var random = Math.round(Math.random() * 255);
		color += random.toString();
  
		if (i < 2) {
		  color += ",";
		}
	  }
  
	  color += ")";
  
	  // Set the background color
	  document.querySelector("table").style.backgroundColor = color;
	});
    // Add popup with text when table is clicked by user
	function clickme() {
	  alert('Hey, you clicked me!');
	}
  
	document.querySelector("table").addEventListener("click", clickme);
  }

// Call the initialize function when the DOM has loaded
document.addEventListener('DOMContentLoaded', initialize);