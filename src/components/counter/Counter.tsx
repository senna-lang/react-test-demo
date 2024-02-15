import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>count up</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={e => setAmount(parseInt(e.target.value))}
      />
      {/* <button onClick={() => decrement()}>Set</button> */}
    </div>
  );
};

export default Counter;
