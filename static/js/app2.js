// from data.js
var tableData = data;

// Create <thead>
// Create <thead>
var thead = d3.select("thead");
var row = thead.append("tr")
var headNames = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"]


for (var i = 0; i < headNames.length; i++) {
  var name = headNames[i];
  var cell = row.append('th');
  cell.attr("class", "table-head");
  cell.text(name);
}

// Select <tbody>
// Create <tbody>

function createTable(row) {
  var tbody = d3.select("tbody");
  row.forEach((ufoReport) => {
    var row = tbody.append("tr");
    row.attr("class", "table-primary");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
createTable(tableData)



var submit = d3.select("#filter-btn");

submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputTbody = d3.select("tbody");

  var keyword_pairs = [{"id":"#datetime","key":"datetime"},
                        {"id":"#city","key":"city"},
                        {"id":"#state","key":"state"},
                        {"id":"#country","key":"country"},
                        {"id":"#shape","key":"shape"},]
  var filteredData = tableData;
  keyword_pairs.forEach(function(keyword){
    var my_value = d3.select(keyword.id).property("value");
    console.log(my_value);
    if(my_value != ""){
      filteredData = filteredData.filter(ufo=> {
        return (ufo[keyword.key] === my_value)
      });
    }
  });

  console.log(filteredData);
  // //Clear all previuos data from UFO table
  inputTbody.html("");
  createTable(filteredData)
});
