![Java Script Logo](https://jbstechinfo.com/wp-content/uploads/2023/08/JavaScript-Symbol.png)

# Review of Essential JavaScript for React
* `Quokka` -> Start on Current File via Command Pallette
* `const`for not changing values, `var` for dynamic / variable values, `let`is outdated

## Equality Operators
### Comparing Values
- **`==` (Loose Equality)**:
  - Compares two values for equality **after** type conversion.
  - Example: `5 == '5'` is `true` because the string `'5'` is converted to the number `5`.

- **`===` (Strict Equality)**:
  - Compares two values for equality **without** type conversion.
  - Example: `5 === '5'` is `false` because the types (`number` and `string`) are different.

- **`!=` (Loose Inequality)**:
  - Checks if two values are **not equal** after type conversion.
  - Example: `5 != '5'` is `false` because `'5'` is converted to `5`, making them equal.

- **`!==` (Strict Inequality)**:
  - Checks if two values are **not equal** without type conversion.
  - Example: `5 !== '5'` is `true` because the types are different.

### Comparing Different Data Types

- **Numbers**:
  - Compare directly using `==`, `===`, `!=`, `!==`.
  - Example: `10 === 10` is `true`.

- **Strings**:
  - Compare based on their Unicode values.
  - Example: `'abc' === 'abc'` is `true`.

- **Objects**:
  - Two objects are equal only if they reference the **same object**.
  - Example: `{a: 1} === {a: 1}` is `false` because they are different objects in memory.
  - Use `JSON.stringify(obj1) === JSON.stringify(obj2)` for deep comparison (though not always reliable).

- **Arrays**:
  - Similar to objects, arrays are compared by reference.
  - Example: `[1, 2] === [1, 2]` is `false`.
  - Use deep comparison or loop through elements for equality checks.

- **Null and Undefined**:
  - `null == undefined` is `true` (because they are considered equal in loose equality).
  - `null === undefined` is `false` (because they are different types).

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

## Map, Filter, Reduce and Sort
* Map, filter and reduce are the most used and powerful chaining methods out there. They are used to iterate through iterables and modify the array etc. in a easy and straightforward way.
* Map: 
    * `iterable.map((item) => item.modify)`
    * `const x = [1, 2, 3, 4].map((num) => num ** 2);`
* Filter: `iterable.filter((item) => item.contains("something"))`
* Reduce: 
    * The most powerfull array method in JS that reduces an array to a single value.
    * The reduce method in JavaScript executes a reducer function on each element of an array, resulting in a single accumulated value.
    * `const sum = [1, 2, 3, 4].reduce((accumulator, currentValue) => accumulator + currentValue, 0);`
    * Here the `accumulator` is the starter value set to `0` in the beginning and is updated with the `+` method each iteration of the array.
* Sort: 
    * The sort method sorts the array in placew and returns the sorted array. -> use `slice()` to create a copy of the array before sorting
    * The function works by taking two elements at a time and comparing them. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, nothing changes.
    * `iterable.sort((a, b) => a - b)` -> Sorts the array in ascending order
    * `iterable.sort((a, b) => b - a)` -> Sorts the array in descending order
    * `iterable.sort((a, b) => a.name.localeCompare(b.name))` -> Sorts the array by name 
        ```javascript
        const comp1 = "Allo mister";
        const comp2 = "Bello mister";
        comp1.localeCompare(comp2); // -1 because A comes before B
        comp2.localeCompare(comp1); // 1 because B comes after A
        ```
    * `iterable.sort((a, b) => a.name.length - b.name.length)` -> Sorts the array by name length

## Working with Immutable Arrays
* We want to alter Arrays without changing the original array
* remove with `filter()`
* add with `spread operator`
* update with `map()` and `spread operator` -> `const updatedArray = array.map((item) => item.id === id ? {...item, key: value} : item)` **THE SPREAD OPERATOR IS ESSETIAL THROUGHOUT THE COURSE**


## Async and Await and Promises
* [JSON Placeholder](https://jsonplaceholder.typicode.com/) is a great API to test async functions
* `fetch()` is a promise based function that returns a promise
* A Promise is an object representing the eventual completion or failure of an asynchronous operation.
    * e.g. `const promise = fetch("https://jsonplaceholder.typicode.com/users")` -> returns a promise 
    * **Pending**: Initial state, neither fulfilled nor rejected.
    * **Fulfilled**: Meaning that the operation completed successfully.
    * **Rejected**: Meaning that the operation failed or an error was thrown.
* We can call the `then()` method on a promise to handle the result of the promise
    * `promise.then((response) => response.json()).then((data) => console.log(data))` -> fetches the data and logs it to the console
* Async and Await is a way to handle promises in a more synchronous way that means we can write async code that behaves like sync code. For example when fetching some data, we want to wait for the data to be fetched before we continue with the code.
  * Waiting works only within the scope of an async function
  * `async` keyword is used to define an async function
  * `await` keyword is used to wait for a promise to resolve
  * you have to await a async function to get the result
  * **`async` functions always return a promise**