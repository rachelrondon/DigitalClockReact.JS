import React, { useState } from 'react';
import "./Time.css";

const Time = () => {
  const day = new Date();

  const [time, setTime] = useState("");
  const [date, setDate] = useState(day.toLocaleDateString([], {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  }));

    setInterval(() => {
      const day = new Date();
      const exactTime = day.toLocaleTimeString();
      if (time !== exactTime) {
        setTime(day.toLocaleTimeString([], {
          hour: "2-digit", minute: "2-digit", second: "2-digit"
        }))
      }
    },1000);

    return (
      <div className="digital-clock">
        <p className="time">{time}</p>
        <p className="date">{date}</p>
      </div>
    )
};

export default Time;