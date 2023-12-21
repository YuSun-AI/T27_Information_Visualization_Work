
// Data for the combined chart (22 players)
var players = [
    { name: 'Miroslav Klose', totalGames: 24, totalGoals: 16, avgGoals: 0.7, flagIcon: 'German.svg' },
    { name: 'Ronaldo', totalGames: 19, totalGoals: 15, avgGoals: 0.8, flagIcon: 'Brazil.svg' },
    { name: 'Gerd Müller', totalGames: 13, totalGoals: 14, avgGoals: 1.1, flagIcon: 'German.svg' },
    { name: 'Just Fontaine', totalGames: 6, totalGoals: 13, avgGoals: 2.2, flagIcon: 'France.svg' },
    { name: 'Pelé', totalGames: 14, totalGoals: 12, avgGoals: 0.9, flagIcon: 'Brazil.svg' },
    { name: 'Sándor Kocsis', totalGames: 5, totalGoals: 11, avgGoals: 2.2, flagIcon: 'Hungary.svg' },
    { name: 'Jürgen Klinsmann', totalGames: 17, totalGoals: 11, avgGoals: 0.7, flagIcon: 'German.svg' },
    { name: 'Helmut Rahn', totalGames: 10, totalGoals: 10, avgGoals: 1.0, flagIcon: 'German.svg' },
    { name: 'Gary Lineker', totalGames: 12, totalGoals: 10, avgGoals: 0.8, flagIcon: 'England.svg' },
    { name: 'Gabriel Batistuta', totalGames: 12, totalGoals: 10, avgGoals: 0.8, flagIcon: 'Argentina.svg' },
    { name: 'Teófilo Cubillas', totalGames: 13, totalGoals: 10, avgGoals: 0.8, flagIcon: 'Peru.svg' },
    { name: 'Thomas Müller', totalGames: 14, totalGoals: 10, avgGoals: 0.7, flagIcon: 'German.svg' },
    { name: 'Grzegorz Lato', totalGames: 20, totalGoals: 10, avgGoals: 0.5, flagIcon: 'Poland.svg' },
    { name: 'Eusébio', totalGames: 6, totalGoals: 9, avgGoals: 1.5, flagIcon: 'Portugal.svg' },
    { name: 'Christian Vieri', totalGames: 9, totalGoals: 9, avgGoals: 1.0, flagIcon: 'Italy.svg' },
    { name: 'Vavá', totalGames: 10, totalGoals: 9, avgGoals: 0.9, flagIcon: 'Brazil.svg' },
    { name: 'David Villia', totalGames: 12, totalGoals: 9, avgGoals: 0.8, flagIcon: 'Spain.svg' },
    { name: 'Paolo Rossi', totalGames: 14, totalGoals: 9, avgGoals: 0.6, flagIcon: 'Italy.svg' },
    { name: 'Jairzinho', totalGames: 16, totalGoals: 9, avgGoals: 0.6, flagIcon: 'Brazil.svg' },
    { name: 'Roberto Baggio', totalGames: 16, totalGoals: 9, avgGoals: 0.6, flagIcon: 'Italy.svg' },
    { name: 'Kart-Heinz Rummenigge', totalGames: 19, totalGoals: 9, avgGoals: 0.5, flagIcon: 'German.svg' },
    { name: 'Uwe Seeler', totalGames: 21, totalGoals: 9, avgGoals: 0.4, flagIcon: 'German.svg' },
];

// Width and height of the chart
var barWidth = 15; // Adjust the width of each bar
var padding = 30;   // Padding between bars
var svgWidth = (barWidth + padding) * players.length;

var height = 180;

// Create an SVG container
var svg = d3.select(".combined-chart")
    .attr("width", svgWidth)
    .attr("height", height);

players.forEach(function(player) {
    player.goalRatio = player.totalGoals / player.totalGames;
});

// Create linear scales
var yScale = d3.scaleLinear()
    .domain([0, d3.max(players, function(d) { return d.totalGoals; })])
    .range([height, 0]);

var avgGoalsScale = d3.scaleLinear()
    .domain([0, d3.max(players, function(d) { return d.totalGoals / d.totalGames; })])
    .range([height, 0]);

var legend = svg.append("g")
    .attr("transform", "translate(" + (svgWidth + 80) + "," + 120 + ")"); // Adjust the position of the legend

// Add a vertical dashed line between two scales
var verticalLinesData = d3.pairs(players); // Create pairs of adjacent players

// Add bar chart rectangles
svg.selectAll(".bar")
    .data(players)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) - barWidth/2; })
    .attr("y", function(d) { return 145 + yScale(d.totalGoals); })
    .attr("width", barWidth)
    .attr("height", function(d) { return 60 + height - yScale(d.totalGoals); })
    .style("fill", "#f0d490");

svg.selectAll(".bar-value")
    .data(players)
    .enter().append("text")
    .attr("class", "bar-value")
    .attr("x", function(d, i) { return 62.5 + i * (barWidth + padding) + barWidth / 2; })
    .attr("y", function(d) { return 140 + yScale(d.totalGoals); }) // Adjust the vertical position
    .attr("text-anchor", "middle")
    .style("fill", "black")  // Set the text color to black
    .style("font-size", "10px") // Set the font size
    .text(function(d) { return d.totalGoals; });

// Add bar chart rectangles for avgGoals
svg.selectAll(".avg-goals-bar")
    .data(players)
    .enter().append("rect")
    .attr("class", "avg-goals-bar")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + barWidth/2; })
    .attr("y", function(d) { return 145 + avgGoalsScale(d.totalGoals / d.totalGames); })  // Use avgGoalsScale here
    .attr("width", barWidth)
    .attr("height", function(d) { return 60 + height - avgGoalsScale(d.totalGoals / d.totalGames); })  // Use avgGoalsScale here
    .style("fill", "#1f77b4");

svg.selectAll(".avg-goals-value")
    .data(players)
    .enter().append("text")
    .attr("class", "avg-goals-value")
    .attr("x", function(d, i) { return 62.5 + i * (barWidth + padding) + 1.5 * barWidth; })
    .attr("y", function(d) { return 140 + avgGoalsScale(d.totalGoals / d.totalGames); }) // Adjust the vertical position
    .attr("text-anchor", "middle")
    .style("fill", "black")  // Set the text color to black
    .style("font-size", "10px") // Set the font size
    .text(function(d) { return d.avgGoals; });

// Add a line at the bottom of the bar chart
svg.append("line")
    .attr("x1", 55)  // Starting x-coordinate
    .attr("y1", height + 205)  // Starting y-coordinate (adjust as needed)
    .attr("x2", svgWidth + 55)  // Ending x-coordinate
    .attr("y2", height + 205)  // Ending y-coordinate (adjust as needed)
    .style("stroke", "black");  // Set the line color to black

svg.selectAll(".vertical-dashed-line")
    .data(verticalLinesData)
    .enter().append("line")
    .attr("class", "vertical-dashed-line")
    .attr("x1", function(d, i) { return 70 + (i + 1) * (barWidth + padding) - padding / 2; }) // X-coordinate of the starting point
    .attr("y1", height + 205)  // Y-coordinate of the starting point
    .attr("x2", function(d, i) { return 70 + (i + 1) * (barWidth + padding) - padding / 2; }) // X-coordinate of the ending point
    .attr("y2", 85)  // Y-coordinate of the ending point
    .style("stroke-dasharray", "4,4")  // Set the dash pattern for a dashed line
    .style("stroke", "black");

// Add player names
svg.selectAll(".player-name")
    .data(players)
    .enter().append("text")
    .attr("class", "player-name")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + barWidth / 2; })
    .attr("y", height + 210)
    .attr("dy", ".25em")
    .attr("transform", function(d, i) {
        return "rotate(-90 " + (70 + i * (barWidth + padding) + barWidth / 2) + "," + (height + 210) + ")";
    })
    .text(function(d) { return d.name; });

// Add flag icons
svg.selectAll(".flag-icon")
    .data(players)
    .enter().append("image")
    .attr("class", "flag-icon")
    .attr("xlink:href", function(d) { return d.flagIcon; })
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + (barWidth - 30) / 2; })
    .attr("y", height + 360);

// Add circles for average goals
svg.selectAll(".avg-goals-circle")
    .data(players)
    .enter().append("circle")
    .attr("class", "avg-goals-circle")
    .attr("cx", function(d, i) { return 70 + i * (barWidth + padding) + barWidth / 2; })
    .attr("cy", function(d) { return 80; })
    // .attr("r", 2)
     .attr("r", function(d) { return d.totalGames; })
    .style("fill", "red");


// Add a rectangle for the bar chart color
legend.append("rect")
    .attr("width", 12)
    .attr("height", 15)
    .style("fill", "#f0d490");

// Add text for the bar chart legend
legend.append("text")
    .attr("x", 15)
    .attr("y", 10)
    .attr("dy", ".25em")
    .style("text-anchor", "start")
    .text("Goals scored")
    .style("font-size", "12px"); // Set the font size

// Add a rectangle for the bar chart color
legend.append("rect")
    .attr("y", 20)
    .attr("width", 12)
    .attr("height", 15)
    .style("fill", "#1f77b4");

// Add text for the average goals legend
legend.append("text")
    .attr("x", 15)
    .attr("y", 30)
    .attr("dy", ".25em")
    .style("text-anchor", "start")
    .text("Goals/game")
    .style("font-size", "12px"); // Set the font size


legend.append("circle")
    .attr("cx", 6)
    .attr("cy", 48)  // Adjust the vertical position
    .attr("r", 7)
    .style("fill", "red");

// Add text for the average goals legend
legend.append("text")
    .attr("x", 15)
    .attr("y", 50)  // Adjust the vertical position
    .attr("dy", ".25em")
    .style("text-anchor", "start")
    .text("Games played")
    .style("font-size", "12px"); // Set the font size


// Add total games text
svg.selectAll(".total-goals-text")
    .data(players)
    .enter().append("text")
    .attr("class", "total-goals-text")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + barWidth / 2; })
    // .attr("y", function(d) { return height + 290; })
    .attr("y", function(d) { return 85; })
    .text(function(d) { return d.totalGames; });

// Add a main title
svg.append("text")
    .attr("class", "main-title")
    .attr("x", svgWidth / 2)  // Set the x-coordinate to the center of the SVG
    .attr("y", 30)  // Adjust the y-coordinate as needed
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .text("Scores-Average Scores-Games in World Cup History");