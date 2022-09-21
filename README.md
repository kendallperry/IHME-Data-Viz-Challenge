# Data Visualization Coding Challenge 
by Kendall Perry

**“What population is most affected by opioid use disorders?”**

For this coding challenge, I chose to visualize data based on the mean amount of deaths per 100,000 people using the [Victory](https://github.com/FormidableLabs/victory) data visualization library.  

After fetching data with “sex" and “year” parameters taken from state, I sorted this data based on the “mean" from highest to lowest.  All of the sorted data is stored in state for easy access across different components.  

Within the “VizContainer” component, in order for the data to be compatible with Victory Charts, I created an object called “vizData” with “x” and “y” keys and stored this in state.

A user is able to adjust data they’d like to display in the dashboard by interactively selecting from the “Sex” and “Year" categories, and how many countries they’d like to display using “Set Top Countries”.  This slider allows a user to choose between 5-50 countries. Additionally, there is an optional "Display Mean Amounts" button, which displays each visible country's mean amount to two decimal places.

To take this project one step further, one stretch goal would be to create a “play” button which would allow a user to animate the progression of years from 1990 to 2017.  This would include a fixed y axis (‘Mean amount of people per 100,000’) to show the populations affected over time. 
