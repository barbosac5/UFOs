// 11.2.4: Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// 11.5.1 Dynamic Tables 
function buildTable(data) {
    // First, clear out any existing data.
    tbody.html("");


// 11.5.1 Add the forEach function 
// Next, loop through each object in the data and 
// append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body
        let row = tbody.append("tr");

    // Loop through each feild in the dataRow and
    // each value as a table cell (td)
        bject.values(dataRow).forEach((val) => {
            let call = row.append("td");
            cell.text(val);
            }
        );
    });
}

// 11.5.3 Add Filters
function handleClick(){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


// 11.5.4 Using the "If" statement 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime == date);
    };

    buildTable(filteredData);
};

// Listen for the Event 
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the Final Table 
buildTable(tableData);