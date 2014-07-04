window.onload = function() {
    var data = [3, 2, 1, 6, 10, 4];
    // Vanilla JS
    var div = document.createElement('div');
    div.innerHTML = 'I was added using plain old JS.';
    document.body.appendChild(div);
    // D3.JS
    var body = d3.select('body'); // Select on item
    var div = body.append('div');
    div.html('I was added using d3.js!');
    var section = d3.selectAll('section');
    div = section.append('div');
    div.html('I am appended to every section in the HTML!');
    // Without method chaining, affect the style
    body.style('color','white');
    body.style('background-color','green');
    // Using method chaining to stop saying 'body' every-time
    d3.select('body')
        .style('color','black')
        .style('background-color','white'); 
    // Method chaining lets the current selection also change
    d3.selectAll('section')
        .attr('class', 'special') // Apply the class
      .append('div')// Add a div, AND change the current selection automatically
        .html('Appended to every section... hopefully');
    // Automatic bar-graph time
    d3.selectAll(".chart") // Select the chart
      .selectAll('div') // Pick where data will be joined into
        .data(data) // Join the data
      .enter().append('div') // Know what happens when new data is 'enter'-ed
        .style('width', function(d) { return d * 10 + "px"; }) // Set width
        .text(function(d) {return d;}); // Set text label on the bar
}