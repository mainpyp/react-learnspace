# Review of Essential JavaScript for React
* `Quokka` -> Start on Current File via Command Pallette
* `const`for not changing values, `var` for dynamic / variable values, `let`is outdated

## Destructuring Objects and Arrays
* `const {var1, var2} = object;` -> var1 and var2 must be keys in the object!!
* `const [firstVar, secondVar, ...restVars] = myArray` -> ... (the rest operator can only be placed last)

## Rest / Spread Operators
* Rest Operator: 
    * Add it to the last variable to add the last elements of an Array to a variable as a list (see above)
* Spread Operator:
    * This is used to alter object values
    * `const newGeneres = [...oldGerneArray, "new added gernre"]` -> "spreads out" the old Array and adds the string
    * `const newBook = {...book, moviePublicationDate: "2001-12-12"}` -> "spreads out" object functions and adds new key value pair

## String Literals
* Work very similar as f-strings 
* Syntax: ```const resultString = `Two plus two is ${2 +2}` ```

## Ternaries
* if,  else one liners
* `const returnVal = condition ? returnValIfTrue : returnValIfFalse`

## Arrow Functions
```javascript
function multiply(x, y) {
    return x * y;
};

const multiply = (x, y) => x * y;
```

## Short Circuit
* && returns the second if **first is false**
* || returns the second if **first is true** `hasMovieAdapdation || "has no movie adaptation"`
* ?? returns only the first if its actually null or undefinded. Doe not treat 0 and "" as null
* Falsy values: `0, "", null, undefined`

## Optional chaining
* Only gets value of data if its available without throwing exception
* `books.platform?.rating ?? "No Rating Available"  // No Rating Available if platform is missing` -> Gets the rating only if platform is set else it returns undefined

## Map, Filter and Reduce
* Map, filter and reduce are the most used and powerful chaining methods out there. They are used to iterate through iterables and modify the array etc. in a easy and straightforward way.
* Map: 
    * `iterable.map((item) => item.modify)`
    * `const x = [1, 2, 3, 4].map((num) => num ** 2);`
* Filter: `iterable.filter((item) => item.contains("something"))`
* Reduce: ``
