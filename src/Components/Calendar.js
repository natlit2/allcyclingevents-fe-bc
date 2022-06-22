import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useEvents from "../hooks/useEvents";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import "react-big-calendar/lib/sass/styles";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = useEvents();

  return (
    <div>
      <Calendar
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
