import { useState } from "react";
import Calendar from "react-calendar";

function CalendarComponent(props: any) {
  const [calenderDate, setCalenderDate] = useState(new Date());

  return (
    <div className="reactCalendar">
      <Calendar
        onChange={(e: any) => {
          props.setDate(e);
        }}
        value={calenderDate}
      />
    </div>
  );
}

export default CalendarComponent;
