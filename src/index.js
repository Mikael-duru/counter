import React from 'react';
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  return (
    <main className="h-screen grid place-content-center font-poppins">
      <section className="container mx-auto text-center">
        <h1 className="text-7xl">Counter</h1>
        <div className="text-7xl py-9">{count}</div>
        <div className='flex justify-center gap-5'>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={() => setCount(count - 1)}>Decrease</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={Increase}>Increase</button>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-xl my-7" onClick={() => setCount(0)}>
            Reset
        </button>
      </section>
    </main>
  );
}



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
