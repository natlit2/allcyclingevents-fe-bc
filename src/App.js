import logo from "./logo.svg";
import "./App.css";
import MyCalendar from "./Components/Calendar";
import Event from "./Components/Event";

function App() {
  return (
    <div className="App">
      <div>here will be a nav bar</div>
      <div>
        <MyCalendar />
        <Event />
      </div>
      <footer>here will be the Footer</footer>
    </div>
  );
}

export default App;
