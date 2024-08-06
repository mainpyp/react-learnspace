# Chapter 1-3 - Intro + A First Look at React
## Why do Front-End Frameworks Exists?
* Web-Apps used to be rendered on the server side and nowadays they turn into Single-Page-Apps (SPA) that are rendered on the Client (User PC / Browser). 
* Web Apps are build from components that are updated based on the **data = state**
* Keeping UI in sync with the data is very hard and a lot of work
* They enforce a correct way of structuring code
* Ensure Consistency of Code
## React vs. JS
* React returns _**JSX**_ blocks. JSX is a mix out of HTML, CSS and JS and other components that you can customise.
## What is React
* Based on Components
* Declarative: JSX tells the UI how the components shall look like based on the state of the data
* State Driven: UI updates based on the data / **state** of the data <br> -> React reacts to state changes by re-rendering the UI
* React is just a library (only the View) -> frameworks e.g. NEXT.js
* Extremely popular (AirBnb. Netflix, Paypal, IMDb) and gigantic third party apps
## Environment
* Use VSCode and Chrome (or Arc)
* NodeJS larger than 18
* VSCode Extensions
    * ESLint
    * Prettier
    * One Monokai Theme
    * Material Icons
    * Settings: <br>
    Auto Save -> onFocusChange <br>
    Default Formatter -> Prettier <br>
    Format on save -> on <br>
    ESLint: Run -> on save
* Snippets on github, lower left settings symbold click User Snippets and paste the ones from the repo. Snipptes are powerful shortcuts that lets you type in `cl` which is directly translated to `console.log()`
## Pure React
_Workspace: 01-pure-react_
* React will render the components from the div with id=root. That can be changed but root is the standard
* Template literal = python f-string -> `Please print my ${variable}`
* `useState(defaultValue)` creates a variable and a setVariable function
* `useEffect(function())` updates the variable by calling setVariable
## Setting Up a New React Project: The Options
* create-react-app: Old so dont use for real projects but great for tutorials and demos. ESLint Prettier and Jest already installed
* Vite: Modern Build tool. Manually install ESLinte etc. that can be quite a pain. Bit its extremely fast!
* Next.js or Remix: React Framework includes Routing, Data Fetching etc.
## Setting Up a Project With Create-React-App
* `npx create-react-project app-name` creates a new REACT Project
    * node_modules/
    * public/ (asset folder + index.html file with `div id="root"`)
    * src/ (development folder with a bunch of redundant files)
    * .gitignore
    * package.json + lockfile
    * README
* `npm run start` starts the webserver
    * this is defined in `package.json` under scripts