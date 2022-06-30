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
          class="popup"
          trigger={<button className="navBtn">News</button>}
          position="bottom left"
        >
          <div className="popup-content-container">
            <p>new features to come:</p>
            <p>more events</p>
            <p>Share the website with friends</p>
            <p>save an event to your calendar</p>
            <p>Accessibility features</p>
            <p>Theme support</p>
            <p>and much more...</p>
            <p>So stay tuned!</p>
          </div>
        </Popup>
        <Popup
          class="popup"
          trigger={<button className="navBtn">Contact</button>}
          position="bottom center"
        >
          <div className="popup-content-container">
            <p>Find me on Linkedin</p>
            <p>
              <a href="https://www.linkedin.com/in/antonlitvak" target="_blank">
                linkedin.com/in/antonlitvak
              </a>
            </p>
          </div>
        </Popup>
        <Popup
          class="popup"
          trigger={<button className="navBtn">About</button>}
          position="bottom right"
        >
          <div className="popup-content-container">
            <p>Hi there!</p>
            <p>I am Anton, thanks for visiting my website!</p>
            <p>
              In this web site you could find all the bicycle events happening
              in Berlin
            </p>
            <p>Well...not ALL of them, but that's the goal</p>
            <p>I built this website as my final project</p>
            <p>completing a Full-stack web and app developer bootcamp</p>
            <p>
              I love bicycles and wanted to have a calendar of all the bicycle
              events in Berlin
            </p>
            <p>and descided to share my findings with everyone</p>
            <p>hope you enjoy it, and see ya' on the trails</p>
            <p></p>
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
