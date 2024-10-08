# Working with Components, Props and JSX

* To create a React project we first need a `index.js` file that will be the **entry point** of the application.
* This plays together with the `index.html` file that will be the **root** of the application. This is placed in the **public** folder.
* This is redered with the module bundler (Webpack) and the Babel transpiler.
* Or we can use the create-react-app tool to create a new project.
* With `npm react start` we can start the development server.
* We create a root component with `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`.
* We wrap the `<App />` tag in a `<React.StrictMode>` tag to check for potential problems.
  * We create a root div in which we inject the JSX code from the App component.
  * This is rendered when the page is loaded, refreshed or when the state changes.
* INFO: `React` is a JavaScript library for building user interfaces, while `ReactDOM` is responsible for rendering those interfaces in the browser by interacting with the DOM.

## Debugging

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
* To add javascript in JSX we use `{}`.
  * e.g. `<h1>{new Date().getFullYear()}</h1>`
* Traditional Seperation of Concerns: HTML, CSS, JS
* But in the latest years, the three langauges were tighter and tighter coupled together -> combine it into one language.
* React: Speraation of Concerns on a **component basis**.

## Styling Components

* We can use all traditional CSS methods to style components.
* We can use inline styles with the `style` attribute.
  * However we cannot use strings but js objects.
  * e.g. `style={{color: 'red'}}`
    -> enter style mode with the first curly brackets and then enter the object with the second curly brackets.
  * All tags (font-size) have been converted to **camelCase**.
* We can use a `style.css` file and import it into the component.
  * import it with `import './style.css'` in the component file.
  * We dont use the `class` tag but the `className` tag.
  * `style` overwrites the `style.css` file.
* We can use SASS and LESS with the `node-sass` and `less` packages.
* We even can use tailwind CSS with the `tailwindcss` package.
* Component parameters in React are called **props**.
  * They are passed to the component as attributes. e.g. `<ComponentName prop1="value1" prop2="value2" />`
  * We can access them in the component with `props.prop1` and `props.prop2`.

## Props

Props are basically parameters that are passed to a component.
They are passed similar to HTML attributes.
Example:

```javascript
function App() {
  return <Card title="My Title" content="My Content" />;
}

function Card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}
```

* we can also use decomposition of a js object to get the props we need.

```javascript
const myProps = {
  title: 'My Title',
  content: 'My Content'
}
function App() {
  return <Card {...myProps} />;
}
...
```

## JSX

### The Rules of JSX

1. JSX works exaclty like HTML but we can enter JavaScript mode with `{}`.
2. In JavaScript mode we can use any JavaScript expression but no statements.
3. JSX creates a JavaScript expression with React.createElement
4. A JSX element can only have one root element.
5. Every tag must be closed. (`<br>` -> `<br />`)
6. Comments in JSX are wirtten by entering JS mode and then using `{/* */}`

### Rendering Lists

* We can use the `map` function to render a list of elements.

1. Enter JS mode with `{}`
2. Use the map function on the iterable (array) `iterable.map()`
3. Use the data of each item to create a new JSX element. `iterable.map((item) => <li key={item.id}>{item.name}</li>)`

```javascript
const myList = [1, 2, 3, 4, 5];
const myListItems = myList.map((item) => <li key={item}>{item}</li>);
/*
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
*/
```

### Conditional Rendering

* We can use the `&&` operator to render a component conditionally.

```javascript
const myCondition = true;
const myComponent = myCondition && <MyComponent />;
```

* We can also use the `ternary` operator to render a component conditionally.

```javascript
const myCondition = true;
const myComponent = myCondition ? <MyComponent style={{ color: "red" }} /> : <MyComponent style={{ color: "blue" }} />;
```
