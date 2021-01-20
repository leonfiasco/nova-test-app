

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Instructions

I used create-react-app

Firstly I created a wrapper component that will be the parent component, secondly I made a header that would contain the current weather information such as city e.g London and the current temperature, and a progress bar for reloading the data every minute and also the current time.

To get the weather data I created a custom hook called useApi, which I used async/await and axios to retrieve the api and once this was available I passed the data into a component called Main.js that will house my header and the forecast for the next 5 days.


Next I created another component called forecast that will eventually contain a card list of the 5 days

Similiarly to the useApi custom hook, I used async/await and axios to retrieve the api but this time its was a different endpoint and once this was available I passed the data into a component called Main.js using the use state hook 


now the data in forcast was available I had to run a loop on the array that was given and because the array of days had a 3 hour timestamp for each day I had to do some math, which was 24hrs / 3 = 8 so I used modulus to give me back the array indexes that were multiple of 8 and that gave me the next 5 days and  once that was done I made a card component for each of the five days and I passed the necessary props into the card


I also made a folder called images whih will contain all the weather images and a component called Image that will look through the api's weather description and will return the relevant image for the specific weather condition and I did this using an IIFE and a switch statement.


Then I finally styled the app, and in the forecast component made a setinterval for the progresss bar that every 60sec that app will reload and refresh the weather data 


## Improvements 


If I had more time I would make an input field that given a query I could get the current weather for my chosen location and get the forecast for the next five days


I would also like to add some more animations to liven up my app and make it more interactive 


I would also find a way to put the images into one file and some destructure them and import them into the card component

