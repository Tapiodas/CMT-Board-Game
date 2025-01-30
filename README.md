# Installation Guide

You can use the application on my GitHub Pages site at https://tapiodas.github.io/CMT-Board-Game/, or you can install it locally on your machine.

## Prerequisites

Before installing and running the project, ensure you have the following installed on your system:

- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn** (npm comes bundled with Node.js)

## Installation

### Clone the repository

```sh
git clone https://github.com/Tapiodas/CMT-Board-Game
cd CMT-Board-Game
```

### Install dependencies

```sh
npm install
```
or, if using yarn:
```sh
yarn install
```

### Running the Project
Development Mode
To start the development server, run:
```sh
npm start
```
or, if using yarn:
```sh
yarn start
```

This will launch the app in development mode with hot-reloading enabled.

### Running Tests
To run tests, use:

```sh
npm test
```
or, if using yarn:
```sh
yarn test
```
This will execute the test suite to ensure everything is working as expected.

### Building for Production
To build the project for production, run:

```sh
npm run build
```
or, if using yarn:
```sh
yarn build
```
This will generate optimized static files in the build/ directory.

### Additional Notes
If you encounter dependency issues, try running npm audit fix or yarn upgrade.
Make sure your .env file is correctly set up if required.
