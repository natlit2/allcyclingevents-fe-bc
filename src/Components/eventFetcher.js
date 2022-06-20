import React, { useState, useEffect } from "react";
import Event from "./Event";

const URL = "http://localhost:5000/events";

export default function EventFetcher() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((results) => console.log(results.Events[34].title))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {events.map((results) => (
        <Event title={results.Events[34].title} />
      ))}
      eventfetcher from component
    </div>
  );
}
