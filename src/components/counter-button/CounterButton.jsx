import React, { useState } from 'react';

const CounterButton = React.memo((props) => {
  const [count, setCount] = useState(0);
  console.log('CounterButton', props);

  return (
    <button style={{ color: props.color }} onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
});

export default CounterButton;
