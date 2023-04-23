# Web App

This is a simple web app built with webpack, Bootstrap 5, and Cypress for testing. It uses HTML, CSS, and JavaScript to display a responsive webpage that is optimized for different screen sizes. The app also includes some basic functionality, such as a navigation menu and a contact form.

<br>

## Installation

To install the app, first clone the repository:

```
git clone https://github.com/elieraad/web-app.git

```

Then, navigate to the project directory and install the dependencies:

```
cd web-app
npm install
```

<br>

## Usage

To start the app in development mode, run:

```
npm start
```

This will start a development server that you can access by opening a web browser and navigating to http://localhost:8080. The app will automatically reload whenever you make changes to the code.

<br>

To run the Cypress tests, run:

```
npm run cypress:open
```

This will open the Cypress Test Runner, where you can select and run the tests.

<br>

To build the app for production, run:

```
npm run build
```

This will create a dist directory containing the optimized production build of the app.

<br>

## Deployment

To deploy the app to GitHub Pages, run:

```
npm run deploy
```

This will create a new branch called gh-pages and publish the dist directory to it. You can then access the app online at `https://<your-github-username>.github.io/web-app`

