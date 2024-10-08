const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];

function getBooks() {
    return data;
}

function getBookid(id) {
    return data.find((book) => book.id === id);
}

const book = getBookid(2); 
book;

// Destructuring with objects
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
title;

// Destructuring with nested objects
const { goodreads, librarything } = book.reviews;
goodreads;

// Destructuring with arrays
const [firstGenre, secondGenre, ...thirdGenre] = genres;
firstGenre; 
thirdGenre;

// Spread operator
const myNewBook = {...book, title: "The Hobbit", pages: 310};
myNewBook; 

// Template literals (python f-strings)
const bookInfo = `The book ${title} was written by ${author} in ${publicationDate}`;
bookInfo;

// Template literals with expressions
const simpleString = `Two plus two equals ${2 + 2}`;
const splitted = simpleString.split(" ");
const [_, , , equals, result] = splitted;
equals
result;

// Ternary operator
const bookSize = pages > 500 ? "Large Book" : "Booklet";
bookSize;

const infoString = `The book ${title} is a ${bookSize}`;
infoString;

function multiply(a, b) {
    return a * b;
}
const multiplied = multiply(2, 3);
multiplied;

// Arrow functions
const multiplyArrow = (a, b) => a * b;
const multipliedArrow = multiplyArrow(2, 3);
multipliedArrow; 

// Short Circuit Evaluation
console.log(true && "Hello");  // "Hello"
console.log(false && "Hello"); // false
console.log(null && "Hello");  // null
console.log(true || "Hello");  // true
console.log(false || "Hello");  // "Hello"
console.log(null ?? "Hello"); // "Hello" 
console.log("first" ?? "Hello");  // "first"

const short = book.hasMovieAdaptation || "This book has no movie adaptation";
short;  // "This book has no movie adaptation"

const shortCircuit = book.hasMovieAdaptation && "This book has a movie adaptation";
shortCircuit; // "This book has a movie adaptation"


// Nullish Coalescing Operator (??) -> usefull for 0, false, ""
book.pages = 0;
var bookpages = book.pages || "No pages available";
bookpages;  // No pages available
bookpages = book.pages ?? "No pages available";
bookpages;  // 0


// Optional chaining
const rating = book.reviews.goodreads.rating;
rating;  // 4.13

book.reviews.librarything = null;
// const ratingLibrary = book.reviews.librarything.rating;  // Connot read property 'rating' of null
const ratingLibrary = book.reviews.librarything?.rating ?? "No rating available";
ratingLibrary; // No rating available


// Array methods
// MAP
const x = [1, 2, 3, 4].map((num) => num ** 2);
x;  // [1, 4, 9, 16]

const importantBookData = data.map((book) => {
    const { title, author, reviews } = book;
    const { goodreads } = reviews;
    return { title, author, rating: goodreads.rating };
});
importantBookData;

// FILTER
const filteredBooks = data.filter((book) => book.pages > 500);
filteredBooks;

// REDUCE
const product = [1, 2, 3, 4].reduce((term, number) => term * number, 1);
product;  // 24

// explanation: 
// first iteration term = 1, number = 1 -> 1 * 1 = 1, 
// second iteration: term = 1, number = 2 -> 1 * 2 = 2, 
// third iteration: term = 2, number = 3 -> 2 * 3 = 6, 
// fourth iteration: term = 6, number = 4 -> 6 * 4 = 24

const allPages = data.reduce((totalPages, book) => totalPages + book.pages, 0);
allPages; // 2932

// SORT
const unsortedArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const ascendingArr = unsortedArr.sort((a, b) => a - b);
ascendingArr;
const descendingArr = ascendingArr.slice().sort((a, b) => b - a);
ascendingArr;  // because of slice, ascendingArr is not changed
descendingArr;  // [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
unsortedArr; // this is actually sorted in place!!!

const sortedBooksByTitle = data.slice().sort((book1, book2) => book1.title.localeCompare(book2.title));
const sortedTitles = sortedBooksByTitle.map(x=>x.title);
// ['A Game of Thrones', 'Dune', 'Harry Potter and the Philosopher's Stone', 'The Cyberiad', 'The Lord of the Rings']
sortedTitles; 

const comp1 = "Allo mister"
const comp2 = "Bello mister"
comp1.localeCompare(comp2); // -1 because A comes before B
comp2.localeCompare(comp1); // 1 because B comes after A

// Working with immutable data
const myEvenNewerBook = {
  id: 6,
  title: "The Hobbit",
  publicationDate: "1937-09-21",
};
// ADD A BOOK
const againUpdatedBooks = [...data, myEvenNewerBook];
againUpdatedBooks;
console.log(data.length); // 5
console.log(againUpdatedBooks.length); // 6  // data is not changed

// REMOVE A BOOK
const booksAfterRemoval = againUpdatedBooks.filter((book) => book.title !== "The Hobbit");
booksAfterRemoval;

// UPDATE A BOOK
const updatedBooks = booksAfterRemoval.map((book) =>  
  // !!! The Spread operator is essential throguht the whole course !!!
  book.title.includes("Harry") ? {...book, title: "Harry Popler and the Sacknähte!"} : book
);
// ['The Lord of the Rings', 'The Cyberiad', 'Dune', 'A Game of Thrones', 'Harry Popler and the Sacknähte!']
console.log(updatedBooks.map(x=>x.title));

// Asynchronous JavaScript
