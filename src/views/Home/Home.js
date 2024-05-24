import React from "react";
import "./Home.css";

function Home({ onIncrement, counter, onDecrement }) {
  return (
    <div>
      <p className="text">{counter} </p>
      <div className="container_btn">
        <button onClick={() => onIncrement()} className="btn">
          Add
        </button>
        <button
          onClick={() => onDecrement()}
          className={`${counter === 0 ? "btn-disabled" : "btn"}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Home;
