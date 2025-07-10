# WeatherApp

<br>

Live demo - [https://internship-weather-app-2.vercel.app](https://internship-weather-app-2.vercel.app)

<br>

## Install

```sh
npm install
```
or
```sh
npm i
```

## Run in dev mode

```sh
npm start
```

<br>

## Sprint 2

**Objective**:

WeatherApp 🌤️ moving to ReactJS to speed up and optimize further development.

In this sprint, we need to rebuild the application using a functional component approach within ReactJS, work with state, use custom hooks, and implement interaction with the API! 😎

We will have to work with legacy code from other developers after each task.

**Settings**:
+ Solo, Legacy
+ Estimated time: 24 hoursv
+ Number of task: 7
+ Technology: React, JS, HTML, CSS

### Task 7

According to the [layout](https://www.figma.com/file/qxasvzAq6iijrJ8NBPQOQd/Weather-App.-2-sprint.-7-task?type=design&node-id=4008-9369&mode=design&t=jH8KFelF7uucnlSP-0), create a Button component to control the menu items. Add this new component to the existing Slider component.

- There should be scroll buttons on the left and right sides of the cards. When a button is clicked, the cards shift by one position.
- The scrolling should be smooth. If the card is the first or last in the slider, the left or right arrow (respectively) should be inactive.

### Task 6

Retrieve additional weather data for the next 24 hours and the upcoming 5 days. To do this, use the API request:
[API](https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru)

Display the received data in the “Forecast” block cards according to the [layout](https://www.figma.com/file/Q8BX76RTx7NI7Qs5sSvNTy/Weather-App.-2-sprint.-6-task?type=design&node-id=4008-9369&mode=design&t=CmZMirDUJqSFCcyv-0).

In the “24-hour” section, display the first 8 cards.

In the “5-day” section, display 5 cards showing the minimum and maximum temperatures for each corresponding day. The icons should match the weather conditions.

### Task 5

Configure the weather data output using the OpenWeatherMap API:

- Handle and correctly (character-by-character) render long city names, e.g., “Kremenchuk-Konstantinovske”.
- Display atmospheric pressure in millimeters of mercury (mmHg).
- Humidity, pressure, and visibility cards must include a progress bar.
- The pressure progress bar should display values from 700 to 800. The normal range is 740–760.
- The visibility progress bar should display values from 0 to 10 km. At 5 km, the slider should be positioned at 50% of the scale.
- For the sunrise card, show the sunrise time for the current date. If sunrise has already occurred, display how much time has passed since. If it hasn't occurred yet, display how much time is left.
- For the sunset card, apply the same logic as the sunrise card.
- The wind direction indicator in the wind card must rotate based on the angle value received from the OpenWeatherMap API + 180 degrees.
- Next to the wind indicator, display the meteorological direction in Russian. The angle value must be converted into a textual representation.

#### Array of meteorological directions
```js
const directions = ['Северный', 'Северо-восточный', 'Восточный', 'Юго-восточный', 'Южный', 'Юго-западный', 'Западный', 'Северо-западный'];
```

App [layout](https://www.figma.com/file/Bs3oZezBODcMwmJmURmT1f/Weather-App.-2-sprint.-5-task?type=design&node-id=4008-9369&mode=design&t=ymEOcWsn1HJubFDN-0).

**Note**: The slider cards will be filled in the next task.

### Task 4

Add the components according to the [mockup](https://www.figma.com/file/d1kJhRbW7eUa0AXvb9GpeR/Weather-App.-2-sprint.-4-task?type=design&node-id=4008-9369&mode=design&t=vSEwgN4vnbQSUk5m-0) and use the new ones for search: `WeatherSearch` and `Dropdown`. Move all styles to a `.module.css` file. The `WeatherSearch` component should include both the `Dropdown` and the existing `Input` component.

When the user presses Enter in the search input with a value entered, a request should be sent to the familiar city search [API](https://nominatim.openstreetmap.org/ui/search.html):

- While the city is being searched, the dropdown should display a loading state as shown in the mockup, with the heading "Searching" and a loader (use one from `https://loading.io/css/`).

- If no results are found, show the message in the `Dropdown` according to the mockup: "Oops! City not found, try another one."

- If the response is successful, display the heading "Search Results" in the dropdown. When the user clicks on a city name, close the dropdown and send a request to the OpenWeatherMap API (for now, log the result to the console — no need to display weather data on the page yet).

When the user clicks on the search input, the dropdown should open with the heading "Recently Viewed":

- Save the city and its data to localStorage.

- When clicking a city from the "Recently Viewed" list, send a request to the OpenWeatherMap API right away, without making an additional request to get [city](http://nominatim.openstreetmap.org/) data (the data should already be saved from the previous search).

- Only unique search results should be saved in history. The history should be limited to the last 5 entries.

- If the search history is empty, display the message "Search history is empty" as shown in the mockup.

- When clicking the trash icon, clear the search history.

### Task 3

Configure the application to fetch weather data via API

- Use the Nominatim API for city name lookup requests:
```
https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1
```
Where `query` is the search input field value.

- Fetch weather data using the OpenWeatherMap API (Current Weather Data). You'll need to authenticate by adding your API key to the code. Refer to OpenWeatherMap documentation for details.

```
https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru
```
Where:
`lat`, `lon` - coordinates from the Nominatim response
`key` - your OpenWeatherMap API key

- The city search input accepts Russian language text. On Enter key press, display the response in console (specify what exactly should be logged)
- If the API is unavailable, console.log("Connection to third-party service failed")
- If city isn't found, console.log("Oops! City not found, please try another")

Application [mockup](https://www.figma.com/file/Cs2LLWbFddEGCj4t20IEnr/Weather-App.-2-sprint.-3-task?type=design&node-id=4008-9369&mode=design&t=kh1pa50ubk4Gpzvp-0)

### Task 2

Transfer the weather app to React:

- Use JSX for the layout.  
- According to the [design](https://www.figma.com/file/zFJfXRIZpBCcL7DmntXuGe/Weather-App.-2-sprint.-2-task?type=design&t=l2FpGgdKWaJweqPn-6), split the UI into the following components: `ProgressBar`, `Icon`, `TabBar`, `Tab`, and `Slider`.  
- Move component styles into separate `.module.css` files.  
- Set up button handlers for the "24 Hours" and "5 Days" tabs.  
- All icon images should be managed inside the `Icon` component, which displays images based on passed props.  
- The progress bar should fill based on the `current` value.  
- The `ProgressBar` component should accept two props: `current` (a number from 0 to 100, controlling the fill level) and `type` (which controls the background style).  
- Once the migration is complete, delete the `Archive` directory.

**Important:** Only the listed components should be created as part of this task. Other changes will be implemented later.

### Task 1

To create the project, follow these steps:

1. In your working folder, create a directory called `Archive` and move all project-related folders and files into it.  
2. Open the terminal in the root folder (the one above `Archive`) and run the following command (make sure to include the dot at the end):  

```sh
npx create-react-app .
```

Transfer the weather app to React:

- Use JSX for the layout.  
- Based on the [design](https://www.figma.com/file/Wm2T7D9ahgToNriPGc0XrZ/Weather-App.-2-sprint.-1-task?type=design&t=l2FpGgdKWaJweqPn-6), split the UI into the following components: `Header`, `Logo`, `Input`, `Main`, `CityCard`, `Card`, `CardList`, and `Footer`.  
- Place all component styles in separate `.module.css` files.

**Important:** For this task, only the listed components should be created. Other changes will be made later.
