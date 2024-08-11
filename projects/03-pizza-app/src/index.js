import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <PizzaComponent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Pizza with Attitude!</h1>
      <h2>- Get the best Pizza in town -</h2>
    </div>
  );
}

function PizzaComponent() {
  return (
    <div>
      <h2>Pizza Salamino</h2>
      <p>Tomato, mozarella, and pepperoni</p>
      <p>Price: $15</p>
      <img src="pizzas/salamino.jpg" alt="Pizza Salamino" />
    </div>
  );
}

// This is just to demenstrate how to create a footer with React.createElement
// this is not nice :D
const Footer = () => {
  return React.createElement("footer", null, "© 2021 Pizza with Attitude");
};

// React Version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// Strict mode is reccomended because it redners the component twice to check for any side effects and bugs
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before version 18
// ReactDOM.render(<App />, document.getElementById("root"));
