import React from 'react';
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
// import { useState } from "react";
import './index.css'


// Counter App using Class Component
class App extends React.Component {
  // create constructor of the parent and state variable
  constructor() {
    super();
    this.state = {
      counter: 0
    }

    // Binds the onClick to this class
    this.IncrementCounter = this.IncrementCounter.bind(this);
    this.DecrementCounter = this.DecrementCounter.bind(this);
    this.ResetCounter = this.ResetCounter.bind(this);
  }

  // increment Counter
  IncrementCounter(){
    this.setState({
      counter: this.state.counter + 1
    });
  }

  // decrement Counter
  DecrementCounter(){
    this.setState({
      counter: this.state.counter - 1
    });
  }

  // reset Counter
  ResetCounter() {
    this.setState({
      counter: 0
    })
  }

  render() {
    return (
      <main className="h-screen grid place-content-center font-poppins">
        <section className="container mx-auto text-center">
          <h1 className="text-5xl pb-4">Counter App</h1>
          <div className="text-6xl my-16 animate-bounce">{this.state.counter}</div>
          <div className='flex justify-center gap-6'>
            <button className="bg-yellow-500 hover:scale-105 text-white font-bold py-2 px-4 rounded-md text-xl shadow-md" onClick={this.DecrementCounter}>Decrement</button>
            <button className="bg-green-500 hover:scale-105 text-white font-bold py-2 px-4 rounded-md text-xl shadow-md" onClick={this.IncrementCounter}>Increment</button>
          </div>
          <button className="bg-red-500 hover:scale-105 text-white font-bold py-2 px-4 rounded-md text-xl my-7 shadow-md" onClick={this.ResetCounter}>
              Reset
          </button>
        </section>
      </main>
    );
  }
}

// counter using function Component
// function App() {
//   const [count, setCount] = useState(0);

//   const Increase = () => {
//     setCount(count + 1);
//   };

//   return (
//     <main className="h-screen grid place-content-center font-poppins">
//       <section className="container mx-auto text-center">
//         <h1 className="text-7xl">Counter</h1>
//         <div className="text-7xl py-16">{count}</div>
//         <div className='flex justify-center gap-8'>
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={() => setCount(count - 1)}>Decrease</button>
//           <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={Increase}>Increase</button>
//         </div>
//         <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-xl my-7" onClick={() => setCount(0)}>
//             Reset
//         </button>
//       </section>
//     </main>
//   );
// }



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
