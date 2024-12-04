# State: The most important concept of React

## What is state and why do we need it?

🧠 State is the memory of the component. It holds necessary information that it needs to remember throughout the app's lifecycle. <br>
**Examples:** Notification count, form data, loading status, content of a shopping cart, etc.

**State vs. Piece of State or State Variable:** The State means the whole state of the component, while a piece of state is a single property of that state.

**‼️ Updating the State triggers a re-render of the component. ‼️**

**Implementation of state:**

* First, import useState from React
* Then, declare the state variable and the setter function with the useState hook (every function that starts with **"use"** is a hook)
* This can only be done in the top level of the component function
* The setter function is used to update the state variable
* The setter function will trigger a re-render of the component


```jsx
const initialValueOfSomeVariable = 0;
const [someVariable, setSomeVariable] = useState(initialValueOfSomeVariable);

// if you want to update the state and trigger a re-render, you need to use the setter function
setSomeVariable(newValue);
// -> this will trigger a re-render of the component and someVariable will be updated with the new value
```
