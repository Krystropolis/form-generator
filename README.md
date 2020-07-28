This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Components](#components)
  - [App](#app)
  - [TextField](#textfield)
  - [DateField](#datefield)
  - [EmailField](#emailfield)
  - [CheckboxInput](#checkboxinput)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Components

### App
Parent component for form.

*Potential Improvements*
- Autofocus on first input for improved user experience.
- Add connection to backend to deliver form data for processing/storage.
- Add customized input field validation.
- Make form more visually appealing.
- Order fields so they aren't displayed based on order in data input.

### TextField
Supports input types **tel** and **text**.

*Potential Improvements*
- Update the telephone pattern to allow more leniency and better user experience. Could implement a different regex or validate manually. Manual validation would be best, especially if the number is not US-based.

### DateField
Supports input type **date**

*Potential Improvements*
- Set min and max values dynamically.
- Visually connect the field to any associated checkboxes for a more intuitive user experience, perhaps with intentional spacing.

### EmailField
Supports input type **email**. Has an example of how a field might be marked as required; this would require an update to sample-data, as well.

*Potential Improvements*
- Display format requirements on field exit instead of form submission.

### CheckboxInput
Supports input type **checkbox**

*Potential Improvements*
- Visually connect the checkboxes to any associated fields for a more intuitive user experience, perhaps with intentional spacing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.