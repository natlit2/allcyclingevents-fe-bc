import logo from "./logo.svg";
import "./App.css";
import MyCalendar from "./Components/Calendar";
import EventFetcher from "./Components/eventFetcher";

function App() {
  return (
    <div className="App">
      <div>nav bar</div>
      <div>
        <MyCalendar />
        <EventFetcher />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
