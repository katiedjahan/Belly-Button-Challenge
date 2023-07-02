// Use D3 to read the samples.json data from a URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and colsole log it
// let fullData = d3.json(url).then(function(data){
//     console.log(data);
// });

let fullData = d3.json("../samples.json").then(function(data){
    console.log(data);
});



// // Find the top 10 OTUs from the data
let sampleValuesData = object.values(samples.sample_values);

let sortedData = sampleValuesData.sort((a, b) => b.sample_values - a.sample_values);

let topTenData = sortedData.slice(0, 10);
console.log("Top 10: ", topTenData);


let trace1 = {
    x: samples.otu_ids,
    y: samples.sample_values,
    type: 'bar'
};

let data = [trace1];

Plotly.newPlot("bar", data)



// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// let trace1 = {
//     x: 
// }