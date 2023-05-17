import React, { useEffect, useState } from "react";

const Time = () => {
  const d = new Date();
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    // const d = new Date()
    setCurrentTime(d.toLocaleTimeString());
    // currentTime.toLocaleTimeString();
  }, []);
  return <div>{currentTime}</div>;
};

export default Time;
