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
    <li className="pizza">
      <img src={props.imageName} alt="Pizza Salamino" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>
          {props.soldOut ? "Sold Out" : "Price: $" + (props.price + 3)}
        </span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Check out our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <PizzaComponent
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            imageName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  const openHours = 12; // Opening time: 12 PM
  const closeHours = 22; // Closing time: 10 PM
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHours && currentHour < closeHours;
  console.log(
    `Time: ${currentHour}, isOpen: ${isOpen}, openHours: ${openHours}, closeHours: ${closeHours}`
  );
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are currently open until {closeHours} PM! Order now and get a
            <span style={{ color: "red" }}> 10% discount!</span>
          </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <div className="order">
          <p>We are currently closed!</p>
          <button className="btn">Order Now</button>
        </div>
      )}
      © 2021 Pizza with Attitude
    </footer>
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
