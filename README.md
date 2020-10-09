# The Frontend Takehome

Please refer to <https://www.notion.so/kpilens/Front-end-Take-Home-074ac26c99bc4d5b9fe9f63abbe033a2> for instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the Project

> The project consists of a client and an API in `/api` directory

In the project directory, you can run:

### `yarn start`

Runs the client app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `cd /api && yarn dev`

Launches the API in query mode to retrieve responses from the client app

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Staging API

If you need to test with real data, you can change the `API_URL=http://localhost:4000` to `https://temp-takehome-api.staging.kpilens.com` in `/src/App.js`
