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
            <p>New features to come:</p>
            <p>More events</p>
            <p>Share the website with friends</p>
            <p>Save an event to your calendar</p>
            <p>Accessibility features</p>
            <p>Theme support</p>
            <p>And much more...</p>
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
              <a
                href="https://www.linkedin.com/in/antonlitvak"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              In this website you could find bicycle events happening in Berlin
            </p>
            <p>I built this website as my final project</p>
            <p>completing a Full-stack web and app developer bootcamp</p>
            <p>at WBS Coding School - Berlin</p>
            <p>
              I love bicycles and wanted to have a calendar of all the bicycle
              events in Berlin
            </p>
            <p>and descided to share my findings with everyone</p>
            <p>hope you enjoy it, and see ya' on the trails</p>
            <p>p.s. If you have a website that you post bicycle events on</p>
            <p>
              and you want the events to appear here or you want to remove your
              event from this calendar
            </p>
            <p>just drop me a message on Linkedin</p>
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
