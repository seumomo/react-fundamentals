// import Logo from './Logo';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const list = Array(3).fill(null);

  const [count, setCount] = useState(0);

  const handleCountUp = () => setCount(count + 1);

  return (
    <div className="App">
      {list.map((_, index) => (
        // <Logo key={index} />
        <Counter key={index} count={count} onCountUp={handleCountUp} />
      ))}
    </div>
  );
}

export default App;
