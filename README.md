# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Node version: v20.9.0

### Yarn version: 1.22.22

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Solution design about the sorting by 'closest → furthest'

Because all the units checkInDate were all in the past, to make the trip search valid, we need to assume the viewer‘ current time was before all the checkInDate, so closest sorting would be starting from the earliest date, furthest is from the latest.
