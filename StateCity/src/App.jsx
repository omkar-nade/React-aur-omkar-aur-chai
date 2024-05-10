import { useState } from 'react'
// import './App.css'
import SelectStateCity from './component/SelectStateCity'
import Table from './component/Dashboard'

function App() {
 
  const [state, setState] = useState("state")
    const [city, setCity] = useState("city")

    // console.log(state)


  return (
    <>
    <SelectStateCity 
    state={state}
    setState={setState}
    city={city}
    setCity={setCity} />
    <Table state={state} city={city} />
    </>
  )
}

export default App
