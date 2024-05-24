import React from "react";

function Home({ onIncrement, counter, onDecrement }) {
  return (
    <div>
      <p>Clic : {counter} </p>
      <button onClick={() => onIncrement()}>Add</button>

      <button onClick={() => onDecrement()}>Remove</button>
    </div>
  );
}

export default Home;
