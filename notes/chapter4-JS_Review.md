Hier ist der umgestaltete Markdown-Text:

---

![JavaScript Logo](https://jbstechinfo.com/wp-content/uploads/2023/08/JavaScript-Symbol.png)

# Review of Essential JavaScript for React

- **`Quokka`**: Start on Current File via Command Palette.
- Use **`const`** for values that don't change, **`var`** for dynamic/variable values, **`let`** is outdated.

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

- **Destructuring Objects**: `const {var1, var2} = object;`  
  - `var1` and `var2` must be keys in the object.

- **Destructuring Arrays**: `const [firstVar, secondVar, ...restVars] = myArray`  
  - The rest operator (`...`) can only be placed last.

## Rest / Spread Operators

- **Rest Operator**: 
  - Add it to the last variable to include the last elements of an array as a list (see above).

- **Spread Operator**:
  - Used to alter object values.
  - Example: 
    - `const newGenres = [...oldGenreArray, "new added genre"]` (spreads out the old array and adds the string).
    - `const newBook = {...book, moviePublicationDate: "2001-12-12"}` (spreads out object functions and adds a new key-value pair).

## String Literals

- Work similarly to f-strings.
- Syntax: ```const resultString = `Two plus two is ${2 + 2}` ```

## Ternaries

- If-else one-liners.
- Syntax: `const returnVal = condition ? returnValIfTrue : returnValIfFalse`

## Arrow Functions

```javascript
function multiply(x, y) {
    return x * y;
}

const multiply = (x, y) => x * y;
```

## Short Circuit

- **`&&`** returns the second value if **the first is false**.
- **`||`** returns the second value if **the first is true**.
  - Example: `hasMovieAdaptation || "has no movie adaptation"`
- **`??`** returns the first value only if it's `null` or `undefined` (does not treat `0` or `""` as null).
- Falsy values: `0, "", null, undefined`.

## Optional Chaining

- Only retrieves the value of data if it is available, without throwing an exception.
- Example: `books.platform?.rating ?? "No Rating Available"`  
  - Gets the rating only if `platform` is set; otherwise, it returns `undefined`.

## Map, Filter, Reduce, and Sort

- **Map**: 
  - `iterable.map((item) => item.modify)`
  - Example: `const x = [1, 2, 3, 4].map((num) => num ** 2);`
  
- **Filter**: 
  - Example: `iterable.filter((item) => item.contains("something"))`
  
- **Reduce**: 
  - The most powerful array method in JS that reduces an array to a single value.
  - Example: `const sum = [1, 2, 3, 4].reduce((accumulator, currentValue) => accumulator + currentValue, 0);`
  - Here, the `accumulator` starts at `0` and is updated with each iteration.

- **Sort**:
  - The sort method sorts the array in place and returns the sorted array. Use `slice()` to create a copy of the array before sorting.
  - Example: 
    - `iterable.sort((a, b) => a - b)` (sorts the array in ascending order).
    - `iterable.sort((a, b) => b - a)` (sorts the array in descending order).
    - `iterable.sort((a, b) => a.name.localeCompare(b.name))` (sorts the array by name).

    ```javascript
    const comp1 = "Allo mister";
    const comp2 = "Bello mister";
    comp1.localeCompare(comp2); // -1 because A comes before B
    comp2.localeCompare(comp1); // 1 because B comes after A
    ```

    - `iterable.sort((a, b) => a.name.length - b.name.length)` (sorts the array by name length).

## Working with Immutable Arrays

- Alter arrays without changing the original array.
  - Remove with `filter()`.
  - Add with `spread operator`.
  - Update with `map()` and `spread operator`.
  - Example: `const updatedArray = array.map((item) => item.id === id ? {...item, key: value} : item)`.

  **The spread operator is essential throughout the course.**

## Async, Await, and Promises

- [JSON Placeholder](https://jsonplaceholder.typicode.com/) is a great API to test async functions.
- **`fetch()`** is a promise-based function that returns a promise.
- A promise is an object representing the eventual completion or failure of an asynchronous operation.
  - Example: `const promise = fetch("https://jsonplaceholder.typicode.com/users")` (returns a promise).

  Promise States:
  - **Pending**: Initial state, neither fulfilled nor rejected.
  - **Fulfilled**: Operation completed successfully.
  - **Rejected**: Operation failed or an error was thrown.

- **Handling Promises**:
  - Example: 
    - `promise.then((response) => response.json()).then((data) => console.log(data))`  
      (fetches the data and logs it to the console).

- **Async and Await**:
  - Allows writing async code that behaves like sync code.
  - Example:
    - Use the `async` keyword to define an async function.
    - Use the `await` keyword to wait for a promise to resolve.

  **Note**: `async` functions always return a promise.

---