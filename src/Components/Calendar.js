import { useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useEvents from "../hooks/useEvents";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import "react-big-calendar/lib/sass/styles";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = useEvents();

  const CustomEvent = ({ event }) => {
    const ref = useRef();

    useEffect(() => {
      ref.current.parentNode.style.background = `url(${event.imgLink})`;
      ref.current.parentNode.style.backgroundPosition = "center";
      ref.current.parentNode.style.backgroundRepeat = "no-repeat";
      ref.current.parentNode.style.backgroundSize = "cover";
      ref.current.parentNode.onclick = () => {
        window.open(event.link, "_blank");
      };
      ref.current.style.color = "white";
      ref.current.style.background = "rgba(0,0,0,.6)";
    });

    return (
      <span ref={ref}>
        <p>{event.title}</p>
      </span>
    );
  };

  const components = {
    event: CustomEvent,
  };

  return (
    <div>
      <Calendar
        components={components}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
