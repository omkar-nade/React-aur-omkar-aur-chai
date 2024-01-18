import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username:"hitesh",
    age: 22
  }

  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black  p-4 rounded-xl mb-4 '>TailwinCss Test</h1>
      <Card username="OmkarAurChai" btnText="Click me"  />
      <Card username="ReactAurChai" btnText="Visite me"/>
    </>
  )
}

export default App
