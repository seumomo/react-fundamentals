import './Counter.css';
// import { useState } from 'react';

function Counter(props) {
  return (
    <button type="button" className="Counter" onClick={props.onCountUp}>
      {props.count}
    </button>
  );
}

export default Counter;
