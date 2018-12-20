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

function createTable(row){
var tbody = d3.select("tbody");
row.forEach((ufoReport) => {
  var row = tbody.append("tr");
  row.attr("class","table-primary");
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

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime"); 
  var inputCity= d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country")
  var inputShape   = d3.select("#shape")

  // Get the value property of the input element
  var dateValue = inputDate.property("value");
  var cityValue = inputCity.property("value");
  var stateValue = inputState.property("value");
  var countryValue = inputCountry.property("value");
  var shapeValue = inputShape.property("value");

  console.log(dateValue);
  console.log(stateValue);
  console.log(cityValue);
  console.log(countryValue);
  console.log(shapeValue);

  var filteredData = tableData.filter(ufo => (ufo.datetime === dateValue) && (ufo.state === stateValue));

  console.log(filteredData);
  // //Clear all previuos data from UFO table
  inputTbody.html("");
  createTable(filteredData)
});
