import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
  //let counter = 15;

  const addValue = () =>{
   // console.log("Clicked", counter );
  //  let counter = counter+1
   /*setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1)
   setCounter(counter+1) */

   setCounter( prevCounter => prevCounter+1 )
   setCounter( prevCounter => prevCounter+1)
   setCounter( prevCounter => prevCounter+1)
   setCounter( prevCounter => prevCounter+1)

  }

  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur React with Omkar</h1>
      <h2>Counter Value: {counter} </h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>

      <br/>
      <br/>

      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
