# Information Visualization Project2

## Team 27:

+ Name: Zixian Yue(岳子贤) , Student ID: 320210941240
+ Name: Yu Sun(孙雨) , Student ID: 320210941201
+ Name: Mingze Kong(孔铭泽) , Student ID: 320210941171
+ Name: Yihan Qi(亓一涵) , Student ID: 320210940970

## 1. Selection and Introduction

The visualization we choose is a bar-line chart, which shows players with the most goals scored in World Cup Match. The source of the picture is [here](https://cn.bing.com/images/search?view=detailV2&ccid=2LwtS7DS&id=85843CD16857815F105AB94F4A5E13A13A979EAE&thid=OIP.2LwtS7DSgipsqU24KAWLpQHaFN&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d8bc2d4bb0d2822a6ca94db828058ba5%3frik%3drp6XOqETXkpPuQ%26riu%3dhttp%253a%252f%252fwww.aploris.com%252fblog%252fcharts%252fwp-content%252fuploads%252fsites%252f2%252f20180622-most-goals-scored-in-world-cups-1-768x541.png%26ehk%3d4UWRU7SQgBSMUrA0JQzvPHZfTUtEqZd9%252bRAdOvHHbXA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=541&expw=768&q=national+football+team+bar+charts&simid=608050864439386305&FORM=IRPRST&ck=A5B0032C2D0A06BB26DCF70A98809762&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0).
<img src="./Bar-line chart showing players with the most goals scored in World Cup Match.png"/>

<center>Figure1</center>

We chose this visualization not only because we thought it could be improved, but because we thought it was a good visualization. This chart contains a wealth of information about the World Cup. It clearly shows the total number of goals scored by each player, as well as providing information about their nationality and number of matches played. This visualization makes the data more intuitive through a combination of bar charts, line charts, and flag ICONS. The bar chart shows how different players compare to each other, while the line chart shows their goals per game, further highlighting their level of performance.

The social impact of this visualization is to provide a visual representation of the data of the players who have scored the most goals in World Cup matches. Such visualizations stimulate the public's competitive spirit and awareness of sporting events, and promote a deeper understanding of World Cup history and player performance. It can serve as an important reference for sports media, fans and researchers to analyze player performance, national team strength and competition trends. People feel proud and encouraged when they see their favorite players ranked high on the chart. This visualization can also serve as a topic for fan interaction and discussion, facilitating communication and engagement in the sports community.

## 2. Detailed Explanation

### 2.1 Story

+ __Title__: _Stars of the World Cup_
+ __Introduction__: In the performance of the players in the World Cup, the pinnacle of football is a spectacular drama. Through this chart ,which tracks the number of goals scored and games played by each player, we'll look for the highlights and find the stars that shine the most.
+ __Setting of the story__: This is a World Cup full of passion and expectation, and every player has a dream to leave their mark on the biggest football event in the world.
+ __Events(Plot)__: Through a series of competitions, the number of games played and the total number of goals scored by each player were recorded, and the ratio of the total number of goals scored to the number of games played was recorded as the average score per game. To find the biggest star in the World Cup, we sorted each player's average points per game and found the highest scorer.
+ __End of the story__: After a series of competitions and competitions, we chose Just Frntaine, Sandor Kocsis and so on as the stars of this World Cup.
+ __Conclusion__: This chart provides us with an insight into the players' internal performance, helping fans and analysts understand each player's scoring efficiency and game participation.

### 2.2 How to Read it

First, we can look at the bar chart to see how each player is performing offensively. The height of the bar graph represents the total number of goals scored by a player, where higher indicates that the player is more capable of scoring in the game.

Secondly, through the line chart, we can observe the average score of each player. The line chart shows the trend of the average score per game, thus revealing the average goal level of the players. But the trend of the line chart is meaningless, and this is something that needs to be improved later.

### 2.3 Variables

+ Abscissa: players' name
+ Histogram ordinate: total number of goals
+ Vertical coordinate of line chart: average score of field
+ Others: Number of plays,nationality of players

### 2.4 Effectiveness of Visualization

Cognitive Theory

+ __Avoid Stroop Effect__: The interference of the dominant reflection on the non-dominant reflection. For example, in this image, we want to avoid a mismatch between the meaning of the font and the color of the font, as this will make the visualization more difficult for the reader to read.
+ __Reduce Cognitive Load__: Cognitive load refers to the amount of work required by the reader to translate our visualization into long-term memory after exposure to it. In this case, we have ensured the __knowability__ of data, the topic is __concrete__ (players' performance in the World Cup), the different colors and shapes make it easier for readers to understand, and the chart types are __common__ bar charts and line charts. In our chart, the __interpretation__ is good. Variables are __accurate__ and the information is clear, the bar chart reflects the total number of goals scored by the players, and the line chart reflects the average number of points scored by each player (although the line chart should not be used here). We present __explanatory__ visualizations and graphs that reflect how the players performed in the World Cup, all of which reduce the cognitive load on the reader.
+ __Avoid Unnecessary Cognitive Tunnels__: This figure includes __multidimensional information__ in order to prevent readers from focusing too much on specific information in the diagram and neglecting other information. It not only records the number of goals scored by the players through the bar chart, but also shows the average score of the game through the line chart, and also annotates the number of plays and other information, which helps the reader to understand the data more comprehensively. __Labeling elements directly__ on the bar to avoid indirect looking-up.The figure also __uses more labels__ and less legends to make readers focus on the picture as a whole.

The above steps makes cognitive theory improve the visual effectiveness of this figure.

## 3. Replication

We copied the original visualization using D3.js, and the result ais as follow:

<img src="./Replication.png"/>

<center>Figure2</center>

## 4. Suggestion and Improvement

There are some problems in the original graph, such as the improper use of the line chart, the trend of the line chart is difficult to convey information, and the number of players played is not visualized, etc. In order to solve these problems, we have made the following changes:

+ Display the number of times a player has played in a bubble chart.

  Explanation:

  1.Reduce __cognitive load__. If the reader tries to memorize the number of players played by the numbers, it will slow down the reading speed and make the information more likely to be forgotten. It's more intuitive if it's presented as a bubble plot.

  2.Improve __proceduralization__. The size of the bubble emphasizes how much of the game is split between different players, and our __procedural knowledge__ can quickly identify it.

  3.Improve __graphical integrity__. The number representation should be proportional to the number of digits, and the bubble size should reflect the average number of appearances. We wanted to emphasize the players' average points per game, so we used a bright red color and shape size to stand out.
+ Change the average score of each run from the line chart to the bar chart.

  Explanation:

  1.Avoid the interference of __procedural knowledge__. Line plots are used to represent trends, but in this case, the horizontal coordinates are the names of the players, not continuous variables (such as time), so using a line plot to represent game averages would be inconsistent with the reader's knowledge of the program.

+ Remove the number of players played at the bottom
  Explanation:

  1.reduce __chartjunk__.After visualizing the number of plays in the form of bubble charts, these data become redundant data, which increases the reading difficulty of the reader.

  2.Imporve __data-ink ratio__
  After removing the redundant data ink, the proportion of effective data is increased, which makes the graoh more simple and clear, and improves the readability.

+ Label the data instead of using the Y-axis.

   Explanation:

   1.Imporve __data-ink ratio__. Not using the Y-axis can reduce excess ink and improve the effective information ratio.

   2.Avoid __cognitive tunnelling__. Using tags to mark the data in a histogram allows the reader to avoid searching for values in the graph, avoiding neglecting other information.

   3.Promote __graphical integrity__. Use clear labels to indicate data and avoid image distortion.

+ Adding chart titles.

  Explanation:

  1.Promote __graphical integrity__.The title indicates that our chart wants to represent how the players performed in the World Cup.

  2.Describe __context__. The title describes the background of the image and our work.

+ Add dashed lines for the background of graph.

  Explanation:

  1.Reduce __cognitive load__. Adding dashed lines allows the reader to quickly find the player corresponding to the average score of the game.

Finally, our improvement is as follow:

<img src="./Optimization.png"/>

<center>Figure3</center>

In summary, __revising and editing__ to graph promote __critical thinking__ and getting __feedback__, and more feedback allows the image to avoid more problems, thus improving the quality of the visualization.

## 5. Publish to the Community

In addition to the above visualization, we have also improved another visualization.

The visualization shows a story of weight loss in a dog. At first glance, it seems that a dog's weight and neck size are perfectly correlated. But in reality this is a __pseudo-correlated__ visualization that pretends to exist by manipulating the axes.

<img src="./dog.png" width="360" height="320" />

<center>Figure4</center>

Our reproduction of the visualization is as follows:

<img src="./Replication2.png" width="360" height="300" />

<center>Figure5</center>

In the original chart, both axes were three units across (21 to 18 on the left; 45 to 42) on the right. In percentage terms, the proportion on the left dropped by 14% and the right by 7%.

In the redesigned chart, we added dots to the line chart and changed the background color to make the trend clearer. At the same time, we removed unnecessary gridlines.

Our improvement to this visualization is as follows:

<img src="./Optimization2.png" width="360" height="300" />

<center>Figure6</center>

We posted our visualizations on X and [Github](https://github.com/YuSun-AI/T27_Information_Visualization_Work), hoping to communicate with people who are interested.

## 6. Conclusion

In this article, we have selected a bar chart of the players who scored the most goals in World Cup matches to improve and optimize. We cover the features and social implications of the original chart and explain in detail how to read it.

We then copied the original chart using D3.js and suggested improvements. We added a __bubble chart__ to show the number of games played by each player, changed the average score per game __from a line chart to a bar chart__, and made other modifications and adjustments. Through the improvement and optimization of the original chart, we make the chart more clear, easy to read and accurate, follow the principles of __cognitive theory__, reduce the cognitive load, and improve the effect of information transmission. Finally, we __posted__ our visualization and wanted to talk to people who were interested in it.

Finally, we will continue to strive to improve and innovate. Thank you for your reading and guidance!
