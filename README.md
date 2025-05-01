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
+ Estimated time: 24 hours
+ Number of task: 7
+ Technology: React, JS, HTML, CSS

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
