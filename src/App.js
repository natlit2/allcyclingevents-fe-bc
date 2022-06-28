//import logo from "./logo.svg";
import "./App.css";
import MyCalendar from "./Components/Calendar";
import Event from "./Components/Event";

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
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
