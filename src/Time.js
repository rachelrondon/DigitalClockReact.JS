import React, { useState } from 'react';
import "./Time.css";

const Time = () => {
    const [time, setTime] = useState("");

    setInterval(() => {
        const day = new Date();
        setTime(day.toLocaleTimeString([], {
          hour: "2-digit", minute: "2-digit", second: "2-digit"
        }))
    }, 1000);

    return (
      <div className="digital-clock">
        <h1 className="time">{time}</h1>
      </div>
    )
};

export default Time;