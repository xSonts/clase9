// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Experiencias Web</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css'
const App=()=>{
  const handleAdd=()=>{
    setCount(count+1)
  };
  const handleRest=()=>{
    setCount(count-1)
  };

  const handleReset=()=>{
    setCount(0)
  };
  const[count,setCount]= useState(1);
  // setTimeout(()=>{
  //   setCount(count+1)
  // },1000);
  //Javascripts
  return(
    //Html
    <div className="container">hola como estas
    {/* <h1>contador{count}</h1> */}
    <h1>contado:{count}</h1>
    <button onClick={handleAdd}>+</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleRest}>-</button>
    </div>
  );
}
export default App;