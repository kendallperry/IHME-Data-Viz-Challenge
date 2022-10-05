# Data Visualization Coding Challenge 

**“What population is most affected by opioid use disorders?”**

View deployed project [here](https://kendallperry.github.io/IHME-Data-Viz-Challenge/)

**A bit about my process and what is included in the project:**

For this coding challenge, I chose to visualize data and create a narrative based on the "mean" amount of deaths per 100,000 people using the [Victory](https://github.com/FormidableLabs/victory) data visualization library.

The data is fetched based on the "sex" and "year" params taken from state, and is then sorted based on the "mean" amount from highest to lowest.

Within the “VizContainer” component, in order for the data to be compatible with Victory Charts, I created an object called “vizData” with “x” and “y” keys and stored this in state for easy access.  

A user is able to adjust data they’d like to display in the dashboard by interactively selecting from the “Sex” and “Year" categories, and how many countries they’d like to display using “Set Top Countries”.  This slider allows a user to choose between 5-50 countries. Additionally, there is an optional "Display Mean Amounts" button, which displays each visible country's mean amount to two decimal places.

To take this project one step further, one stretch goal would be to create a “play” button which would allow a user to animate the progression of years from 1990 to 2017.  This would include a fixed y axis (‘Mean amount of people per 100,000’) to show the populations affected over time.

I enjoyed working on this project, and learned a lot from this data while crafting it's visualization. 
Thank you for reading and I hope you enjoy!

Kendall Perry
