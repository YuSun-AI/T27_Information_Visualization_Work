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
var barWidth = 20; // Adjust the width of each bar
var padding = 10;   // Padding between bars
var svgWidth = (barWidth + padding) * players.length;

var height = 180;

// Create an SVG container
var svg = d3.select(".combined-chart")
    .attr("width", svgWidth)
    .attr("height", height);

// Calculate goal ratios for each player
players.forEach(function(player) {
    player.goalRatio = player.totalGoals / player.totalGames;
});

// Create linear scales
var yScale = d3.scaleLinear()
    .domain([0, d3.max(players, function(d) { return d.totalGoals; })])
    .range([height, 0]);

var avgGoalsScale = d3.scaleLinear()
    .domain([0, d3.max(players, function(d) { return d.totalGoals / d.totalGames; })])
    .range([0, height]);

// Define a line generator for the average goals line
var line = d3.line()
    .x(function(d, i) { return 70 + i * (barWidth + padding) + barWidth / 2; })
    .y(function(d) { return 25 + height - avgGoalsScale(d.totalGoals / d.totalGames); });

// Add a legend group to the SVG
var legend = svg.append("g") // The 'g' element is a container used to group other graphical elements
    .attr("transform", "translate(" + (svgWidth - 50) + "," + 10 + ")"); // Adjust the position of the legend

// Add a block for "Games played"
var gamesPlayedBlock = svg.append("g")
    .attr("class", "games-played-block")
    .attr("transform", "translate(0, " + (height + 270) + ")"); // Adjust the translate values as needed

// Add bar chart rectangles
svg.selectAll(".bar")
    .data(players)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding); })
    .attr("y", function(d) { return 35 + yScale(d.totalGoals); })
    .attr("width", barWidth)
    .attr("height", function(d) { return 60 + height - yScale(d.totalGoals); })
    .style("fill", "#f0d490");

// Add text for total goals on top of each bar
svg.selectAll(".bar-value")
    .data(players)
    .enter().append("text")
    .attr("class", "bar-value")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + barWidth / 2; })
    .attr("y", function(d) { return 30 + yScale(d.totalGoals); }) // Adjust the vertical position
    .attr("text-anchor", "middle")
    .style("fill", "black")  // Set the text color to black
    .style("font-size", "12px") // Set the font size
    .text(function(d) { return d.totalGoals; });

// Add a line at the bottom of the bar chart
svg.append("line")
    .attr("x1", 65)  // Starting x-coordinate
    .attr("y1", height + 95)  // Starting y-coordinate (adjust as needed)
    .attr("x2", svgWidth + 65)  // Ending x-coordinate
    .attr("y2", height + 95)  // Ending y-coordinate (adjust as needed)
    .style("stroke", "black");  // Set the line color to black

// Add player names
svg.selectAll(".player-name")
    .data(players)
    .enter().append("text")
    .attr("class", "player-name")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + barWidth / 2; })
    .attr("y", height + 100)
    .attr("dy", ".25em")
    .attr("transform", function(d, i) {
        return "rotate(-90 " + (70 + i * (barWidth + padding) + barWidth / 2) + "," + (height + 100) + ")";
    })
    // Apply rotation transformation to the text element
    // The rotation is set to -90 degrees, making the text vertical
    // The rotation is centered at the specified coordinates: (70 + i * (barWidth + padding) + barWidth / 2, height + 100)
    .text(function(d) { return d.name; });

// Add flag icons
svg.selectAll(".flag-icon")
    .data(players)
    .enter().append("image")
    .attr("class", "flag-icon")
    .attr("xlink:href", function(d) { return d.flagIcon; })
    // Set the 'xlink:href' attribute for the image element
    // It specifies the location of the image file to be used as the flag icon
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + (barWidth - 20) / 2; })
    .attr("y", height + 250)
    .attr("width", 20)
    .attr("height", 15);

// Add line connecting average goals points
svg.append("path")
    .data([players])
    .attr("class", "avg-goals-line")
    .attr("d", line)
    .style("fill", "none")
    .style("stroke", "#1f77b4")
    .style("stroke-width", 2);

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

// Add a line for the average goals color
legend.append("line")
    .attr("x1", 0)
    .attr("y1", 30)
    .attr("x2", 12)
    .attr("y2", 30)
    .style("stroke", "#1f77b4")
    .style("stroke-width", 2);

// Add text for the average goals legend
legend.append("text")
    .attr("x", 15)
    .attr("y", 30)
    .attr("dy", ".25em")
    .style("text-anchor", "start")
    .text("Goals/game")
    .style("font-size", "12px"); // Set the font size

// Add text for average goals values
svg.selectAll(".avg-goals-text")
    .data(players)
    .enter().append("text")
    .attr("class", "avg-goals-text")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + barWidth / 2; })
    .attr("y", function(d) {
        // Set a threshold value to determine the condition for adjusting the position of average goals text
        // The threshold is a human-defined value and can be flexibly adjusted based on visualization preferences
        var threshold = 1.2;

        // Use the threshold in the condition
        if (d.avgGoals > threshold) {
            return 18 + height - avgGoalsScale(d.avgGoals);
        } else {
            return 45 + height - avgGoalsScale(d.avgGoals);
        }
    })
    .attr("text-anchor", "middle")
    .style("font-size", "12px") // Set the font size
    .text(function(d) { return d.avgGoals; });

// Add total games text
svg.selectAll(".total-goals-text")
    .data(players)
    .enter().append("text")
    .attr("class", "total-goals-text")
    .attr("x", function(d, i) { return 70 + i * (barWidth + padding) + barWidth / 2; })
    .attr("y", function(d) { return height + 290; })
    .text(function(d) { return d.totalGames; });

// Add the first line of text
gamesPlayedBlock.append("text")
    .attr("class", "games-played-line1")
    .text("Games")
    .attr("dy", "1em") // Adjust as needed
    .style("font-size", "12px"); // Set the font size

// Add the second line of text
gamesPlayedBlock.append("text")
    .attr("x", 0)
    .attr("y",15)
    .attr("class", "games-played-line2")
    .text("played")
    .attr("dy", "1em") // Adjust as needed
    .style("font-size", "12px"); // Set the font size
