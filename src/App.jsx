import Counter from "./components/Counter";
import IncrementButton from "./components/IncrementButton";
import React, { useState } from 'react';

const CounterApp = () => {
  // Estado para el contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <Counter count={count} />
      <IncrementButton onIncrement={handleIncrement} />
    </div>
  );
};

export default CounterApp;
