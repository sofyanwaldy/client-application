import "./Card.css";
import { useState } from "react";

// functional component
function Card({ title, body, bgColor = "#ccc" }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="card" style={{ backgroundColor: bgColor }}>
        <div className="card-title">{title}</div>
        <div className="card-body">{body}</div>
        <span>count: {count}</span>
        <button onClick={() => increment}>Increase</button>
      </div>
    </>
  );
}

export default Card;
