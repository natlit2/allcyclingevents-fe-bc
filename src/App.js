import logo from "./logo.svg";
import "./App.css";
import MyCalendar from "./Components/Calendar";
import EventFetcher from "./Components/EventFetcher";
import Event from "./Components/Event";

function App() {
  return (
    <div className="App">
      <div>nav bar</div>
      <div>
        <MyCalendar />
        <EventFetcher />
        <Event />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
