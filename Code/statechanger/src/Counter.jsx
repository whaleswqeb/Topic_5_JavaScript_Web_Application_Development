import React, { useState } from "react";
import "./Counter.css";

const Counter = (props) => {

  const [clicks, setClicks] = useState(0);

  const [message, setMessage] = useState(props.title);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (

    <div className="counter-box">

      <h2>{props.title}</h2>

      <p>Button Clicks: {clicks}</p>

      <button onClick={handleClick}>
        Click Me
      </button>

      <br/><br/>

      <input
        type="text"
        value={message}
        onChange={handleChange}
      />

      <p>Message: {message}</p>

    </div>

  );

};

export default Counter;