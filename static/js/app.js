// from data.js
var tableData = data;

// Creating a function which will create table on webpage

function createTableHead() {
    // get the reference for the table area
    var tablearea = document.getElementById("table-area");

    // creates a <table> element
    var tbl = document.createElement("table");
    tbl.setAttribute("id", "ufo-table");
    
    // creates <thead> 
    var tblHead = document.createElement("thead");
    var tr = document.createElement("tr");

    var headNames = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"]

    // create <th> elemnent for each element in headNames Array
    for (var i = 0; i < headNames.length; i++){
        var name = headNames[i];
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(name))
    }

    tr.appendChild(th)
    tblHead.appendChild(tr)
    document.getElementById("ufo-table").appendChild(tblHead);
}

function createTableBody(){
    // get the reference for the table area
    var tablearea = document.getElementById("ufo-table");

     // creates <tbody> 
    var tblBody = document.createElement("tbody");
    // create <tr> element for each element in array tableData
    for ( var j=0; j < tableData.length; j++){
        var tableDataElement = tableData[i];
        var tr = document.createElement("tr");
        // create <td> element for each element
        for (var k =0; k < tabldDataElement.length; k++) {
        var tableDataInside = tableDataElement[j]
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(Object.values(tableDataInside)))
        }
    tr.appendChild(td)
    tblBody.appendChild(tr)
    document.getElementById("ufo-table").appendChild(tblBody);
    }

// YOUR CODE HERE!
