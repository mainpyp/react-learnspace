import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const h1Style = {
    color: "green",
    fontSize: "6em",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1 style={h1Style}>Pizza with Attitude!</h1>
      <h2>- Get the best Pizza in town -</h2>
    </header>
  );
}

function PizzaComponent(props) {
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <p>Price: ${props.price}</p>
      <img src={props.imageName} alt="Pizza Salamino" />
    </div>
  );
}

function Menu() {
  const time = new Date().toLocaleTimeString();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = time >= openHours && time <= closeHours;
  console.log(
    `Time: ${time}, isOpen: ${isOpen}, openHours: ${openHours}, closeHours: ${closeHours}`
  );

  return (
    <main className="menu">
      <h2>Check out our Menu</h2>
      <PizzaComponent name="Pizza Spinachi" ingredients="Tomato, mozarella, and pepperoni" price="35" imageName="pizzas/salamino.jpg"/>
      <PizzaComponent name="Pizza Slami" ingredients="Tomato, mozarella, and pepperoni" price="15" imageName="pizzas/salamino.jpg"/>
      <PizzaComponent name="Pizza Arschwasser" ingredients="Tomato, mozarella, and pepperoni" price="15" imageName="pizzas/salamino.jpg"/>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">© 2021 Pizza with Attitude</footer>
  );
}

// This is just to demenstrate how to create a footer with React.createElement
// this is not nice :D
// const Footer = () => {
//   return React.createElement("footer", null, "© 2021 Pizza with Attitude");
// };

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
