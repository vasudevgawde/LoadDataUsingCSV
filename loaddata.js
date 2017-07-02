	var myArray = null;
	 var dfObject = null;
	 
	 //this function will load the data from csv file.
            function loadData(){
			var divTable = document.getElementById("divTable");
			var dataset = document.getElementById("selectDataset").value;
               var DataFrame = dfjs.DataFrame;
               DataFrame.fromCSV('data/'+dataset+'.csv').then(df => {
			   //
			   dfObject = df;
			   
				// Let's go to display convert our javascript object to an array.
               myArray =  df.toArray();
			   
			   //Let's go and get the list of columns in the dataset.
			   var columns = df.listColumns();
			   
			   //Let's go to display the array into a html table.
			   GenerateTable(columns, myArray); 
              });
    }
	
	//this function will create a table from the dataset.
	function GenerateTable(columns, myArray) {
    //Build an array containing Customer records.
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
 
    //Get the count of columns.
	var columnCount = myArray[0].length;
 
    //Add the header row.
    var row = table.insertRow(-1);
	  for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = columns[i];
        row.appendChild(headerCell);
    }
	
    //Add the data rows.
    for (var i = 0; i < myArray.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = myArray[i][j];
        }
    }
    var divTable = document.getElementById("divTable");
    divTable.innerHTML = "";
    divTable.appendChild(table);
	divTable.style.border = "solid";
	divTable.style.borderWidth = "thin";
	
}
