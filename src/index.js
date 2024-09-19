import React, { StrictMode } from "react";
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
    <div className="container ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Company</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <div>
      <main className="menu">
        <h2> Our Menu </h2>
        {numPizzas > 0 ? (
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        ) : (
          <p> We're Still working on our menu. please come back later:) </p>
        )}

        {/* <Pizza
          name="Pizza Spianci"
          ingredients="Tomato,mozarella, and ricotta cheese "
          photoName="Pizzas/spinaci.jpg"
          price={10}
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
          photoName="pizzas/funghi.jpg"
        />
        <Pizza
          name="Pizza Salamino"
          ingredients="Tomato, mozarella, and pepperoni"
          price={15}
          photoName="pizzas/salamino.jpg"
          soldOut="true"
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          photoName="pizzas/prosciutto.jpg"
          soldOut="false"
        /> */}
      </main>
    </div>
  );
}
function Pizza(props) {
  console.log(props);
  if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza ">
      <img src={props.pizzaObj.photoName} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3} </span>
      </div>
    </li>
  );
}
function Footer() {
  const openHour = 10; // 10 AM
  const closeHour = 22; // 10 PM
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>we're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn"> Order</button>
        </div>
      ) : (
        <p>
          We're Happy to welcome you between {closeHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
