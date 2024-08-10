// fetch("https://jsonplaceholder.typicode.com/todos");

// // This will log even before the fetch request is completed -> it doesn't wait for the fetch request to complete
// console.log("This is the first log");

// // fetch will return a promise
// console.log(fetch("https://jsonplaceholder.typicode.com/todos")); // Promise {<pending>}

// // fetch will return a promise and we can use .then() to handle the response
// console.log(
//   fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
//     response.json()
//   )
// ); // Promise {<pending>}

// // .json() is also a async function thus it will return a promise
// fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
//   response
//     .json()
//     .then((data) => console.log(data)) // This will log the data
//     .catch((error) => console.log(error))
//     .finally(console.log("This is the last log"))
// );

// // This is printed before the fetch request is completed
// console.log("This should be the last log after the promise is resolved");

async function getTodos() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await result.json();
    const titles = data.map((todo) => todo.title);
    console.log(titles);
    return titles;
}

console.log('Before calling getTodos()');
const titles = await getTodos(); //WITHOUT the await it returns a Promise {<pending>}
// console.log(titles); // This will log the titles
console.log('After calling getTodos()');
