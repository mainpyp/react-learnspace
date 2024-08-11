# Working with Components, Props and JSX
* To create a React project we first need a `index.js` file that will be the **entry point** of the application.
* This plays together with the `index.html` file that will be the **root** of the application. This is placed in the **public** folder.
* This is redered with the module bundler (Webpack) and the Babel transpiler.
* Or we can use the create-react-app tool to create a new project.
* With `npm react start` we can start the development server.
* We create a root component with `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`.
* We wrap the <App /> tag in a <React.StrictMode> tag to check for potential problems.
    * We create a root div in which we inject the JSX code from the App component.
    * This is rendered when the page is loaded, refreshed or when the state changes.
* INFO: `React` is a JavaScript library for building user interfaces, while `ReactDOM` is responsible for rendering those interfaces in the browser by interacting with the DOM.

### Debugging
* Make sure App is running
* Restart it with ctrl+c and `npm start`
* Hard reload the page with ctrl+shift+r
* Check the console for errors (Inspect) or use the DevTools (discussed later)

## Components
* Everything is made of components in React.
* Building blocks -> React takes components and renders them to the DOM.
* `Piece of the UI` 
* Each component has its own data, logic and appearance.
* Components can be nested, reused and combined and they can pass data around.
* A Component Tree can be helpful to visualize the structure of the components.
* A Component is a function that starts with a capital letter and returns JSX.
    ```javascript
    function ComponentName() {
        return someJSX;
    }
    ```
* It can only return **One JSX Element**.
* Never nest Component declarations in other components.

### What is JSX?
* JSX is a syntax extension for JavaScript that allows us to embed JavaSript, CSS and React Components into the written code.
* You can transpile JSX to JavaScript with **`Babel`**.
* Each JSX element is a call to `React.createElement()`.
* **Declarative vs. Imparative Sytnax (JSX is declarative)**
    * Declarative: What you want to happen. (Describing the UI and React takes care of the rest)
    * Imparative: How you want it to happen. (Manually manipulating the DOM)

## Props

## JSX