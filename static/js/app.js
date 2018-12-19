// from data.js
var tableData = data;

// Create <thead>
// Create <thead>
var thead = d3.select("thead");
var row =thead.append("tr")
var headNames = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"]

for (var i = 0; i < headNames.length; i++){
    var name = headNames[i];
    var cell = row.append('th');
    cell.attr("class", "table-head");
    cell.text(name); 
}

// Select <tbody>
// Create <tbody>
var tbody = d3.select("tbody");
tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  row.attr("class","table-primary");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


function filterByDate() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }       
    }
};

function filterByCity() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("city");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }       
    }
};

function filterByState() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("state");
        filter = input.value.toUpperCase();
        table = document.getElementById("ufo-table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            }       
        }
    };

function filterByCountry() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("country");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
};

function filterByShape() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("shape");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
};