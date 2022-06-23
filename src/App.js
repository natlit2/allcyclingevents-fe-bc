import logo from "./logo.svg";
import "./App.css";
import MyCalendar from "./Components/Calendar";
import Event from "./Components/Event";

function App() {
  return (
    <div className="App">
      <div>here will be a nav bar</div>
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
