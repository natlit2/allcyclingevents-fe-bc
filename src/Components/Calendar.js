import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventFetcher from "./EventFetcher";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const myEventsList = [
    {
      start: moment("2022-06-21"), //can add the specific date or the eventDate variable ?
      end: moment().add(0, "days"),
      title: "Some title of the event", //here I need to pass the data from the title key
      //do I need to create another container for this? for the img
      link: "",
      imgLink: "",
    },
    //original object
    {
      start: moment().toDate(),
      end: moment().add(0, "days").toDate(),
      title: "Some title",
    },
  ];
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
