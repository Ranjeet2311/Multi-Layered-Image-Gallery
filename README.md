# Multi layered gallery

Project displays images in grid format, with max 5 images on large screen and reduces the number of image in a row when screen size gets small, hence makes is responsive. All images are covered by an overlay and overlay is toggled on hover.

This project repo contains all components such as FE & BE. FE includes HTML, SCSS (later converted into css and consumed) and javascript/Jquery. Technology used in backend is Node + expressJS, `backend builds the project from public folder`

## Api endpoints:

`image Ids :` http://localhost:3000/api/images
`Inquire Image details with params :` http://localhost:3000/api/image/:param

---

# To serve the project locally, run the following commands:

`Please install NodeJs from https://nodejs.org/en , in case you don't have it already installed on your system.`

1. Install dependencies/modules: `$ npm install`
2. Run the project: `$ nodemon .\index.js`

This will start a development server, that enables us to `test the app` and see our `changes in real-time` on **http://localhost:3000.**
