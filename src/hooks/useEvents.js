import { useState, useEffect } from "react";
//import moment from "moment";

//const URL = "http://localhost:5000/events";
const URL = "https://allcyclingevents-berlin-be.herokuapp.com/events";

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((results) => setEvents(results.Events))
      .catch((err) => console.log(err));
  }, []);

  return events;
};
export default useEvents;
