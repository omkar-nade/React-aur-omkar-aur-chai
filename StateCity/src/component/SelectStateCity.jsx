import React,{useState} from 'react'
import { indianData } from '../data'

function SelectStateCity(){

    const [state, setState] = useState("state")
    const [city, setCity] = useState("city")

    
  return (
    <>
    <select 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    value={state}
    onChange={(e) => setState(e.target.value)}
    >
        {Object.keys(indianData).map((state) => (
            <option key={state} value={state}>
            {state}
            </option>
        ))}
    </select>
<br/>
    <select 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    >
        {indianData[state].map((city) => (
            <option key={city} value={city}>
            {city}
            </option>
        ))}
    </select>
    </>
  )
}

export default SelectStateCity