# UFO_Sightings

### STILL Don't Believe In ALIENS? Watch This And Think Again!
![ufo](ufo_image.png)

#### Description

[UFO Sightings]() is a project made to display the evidences of the UFO object noticed by people all over US in different state during the year  2010. 

#### Methodology
Project has two version:
* In the first version [onkeyup](https://www.w3schools.com/jsref/event_onkeyup.asp) event was used to filter the data. This version is stored in file [app.js](https://github.com/janelcv/UFO_Sightings/blob/master/static/js/app.js) and [index.html](https://github.com/janelcv/UFO_Sightings/blob/master/index.html)
>Data will be filtred once you start typing in input field and will be filtered by one filter each time.
* In the second version [onclick](https://www.w3schools.com/jsref/event_onclick.asp) event was used to filter data by several filters once the button is pressed. This version is stored in [app2.js](https://github.com/janelcv/UFO_Sightings/blob/master/static/js/app2.js) and [index2.html](https://github.com/janelcv/UFO_Sightings/blob/master/index2.html)


1. ### HTML creation.
* HTML file was created using the [Bootstap Library](https://getbootstrap.com).
```html

<head>
<meta charset="utf-8">
<title>UFO Finder</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
<link rel="stylesheet" href="static/css/style.css">
</head>

```
* JavaScript files were linked to the HTML file.
```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
<script src="static/js/data.js"></script>
<script src="static/js/app.js"></script>
```
2. ### Data Processing.
[Dataset](https://github.com/janelcv/UFO_Sightings/blob/master/static/js/data.js) was presented as an array of objects stored in `data.js` file and linked to the HTML file.

Data was converted into table in the HTML file by using [d3.js](https://d3js.org).

```javascript
// from data.js
var tableData = data;

var thead = d3.select("thead");
var row =thead.append("tr")
var headNames = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"]
for (var i = 0; i < headNames.length; i++){
var name = headNames[i];
var cell = row.append('th');
cell.attr("class", "table-head");
cell.text(name); 
}

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
```

The first version was created using **onkeyup event** and linked to html with `onkeyup="filterByDate()"`: 

```javascript

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
```
```html
<form id="search-box">
<input type="text" class="form-control form" onkeyup="filterByDate()" id="datetime" placeholder="Filter by Date">
<input type="text" class="form-control form" onkeyup="filterByCity()" id="city" placeholder="Filter by City">
<input type="text" class="form-control form" onkeyup="filterByState()" id="state" placeholder="Filter by State">
<input type="text" class="form-control form" onkeyup="filterByCountry()" id="country" placeholder="Filter by Country">
<input type="text" class="form-control form" onkeyup="filterByShape()" id="shape" placeholder="Filter by Shape">
</form>
```
The second version was created using **onclick event**  and linked to html with `submit.on("click", function()`:
```javascript

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

```
```html

<form id="search-box">
<input type="text" class="form-control form"  id="datetime" placeholder="Filter by Date">
<input type="text" class="form-control form" id="city" placeholder="Filter by City">
<input type="text" class="form-control form"  id="state" placeholder="Filter by State">
<input type="text" class="form-control form"  id="country" placeholder="Filter by Country">
<input type="text" class="form-control form"  id="shape" placeholder="Filter by Shape">
</form>
<button id="filter-btn" type="submit" class="btn btn-default">Filter Table</button>
```
