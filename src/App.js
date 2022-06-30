import "./App.css";
import MyCalendar from "./Components/Calendar";
import Event from "./Components/Event";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <Popup
          trigger={<button className="navBtn">News</button>}
          position="bottom left"
        >
          <div>
            Cupcake ipsum dolor sit amet cotton candy apple pie caramels muffin.
            Powder topping bear claw bear claw danish ice cream croissant gummi
            bears macaroon. Bear claw bear claw topping pastry liquorice jelly.
            Muffin jelly beans icing cupcake jelly-o. Brownie candy canes sesame
            snaps macaroon shortbread biscuit dessert caramels. Lollipop sugar
            plum fruitcake muffin powder sweet roll. Caramels tootsie roll
            cheesecake wafer tart ice cream apple pie.
          </div>
        </Popup>
        <Popup
          trigger={<button className="navBtn">Contact</button>}
          position="bottom center"
        >
          <div>
            Cupcake ipsum dolor sit amet cotton candy apple pie caramels muffin.
            Powder topping bear claw bear claw danish ice cream croissant gummi
            bears macaroon. Bear claw bear claw topping pastry liquorice jelly.
            Muffin jelly beans icing cupcake jelly-o. Brownie candy canes sesame
            snaps macaroon shortbread biscuit dessert caramels. Lollipop sugar
            plum fruitcake muffin powder sweet roll. Caramels tootsie roll
            cheesecake wafer tart ice cream apple pie.
          </div>
        </Popup>
        <Popup
          trigger={<button className="navBtn">About</button>}
          position="bottom right"
        >
          <div>
            Cupcake ipsum dolor sit amet cotton candy apple pie caramels muffin.
            Powder topping bear claw bear claw danish ice cream croissant gummi
            bears macaroon. Bear claw bear claw topping pastry liquorice jelly.
            Muffin jelly beans icing cupcake jelly-o. Brownie candy canes sesame
            snaps macaroon shortbread biscuit dessert caramels. Lollipop sugar
            plum fruitcake muffin powder sweet roll. Caramels tootsie roll
            cheesecake wafer tart ice cream apple pie.
          </div>
        </Popup>
      </div>
      <h1 id="mainTitle">All Cycling Events - Berlin</h1>
      <div id="calendarContainer">
        <MyCalendar />
        <Event />
      </div>
      <footer id="footer">here will be the Footer</footer>
    </div>
  );
}

export default App;
