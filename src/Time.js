import React, { useState } from 'react';
import "./Time.css";

const Time = () => {
  const [time, setTime] = useState("");

    setInterval(() => {
      const day = new Date();
      const exactTime = day.toLocaleTimeString();
      if (time !== exactTime) {
        setTime(day.toLocaleTimeString([], {
          hour: "2-digit", minute: "2-digit"
        }))
      }
    },1000);

    return (
      <div className="container">
        <p>{time}</p>
      </div>
    )
};

export default Time;