import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1> Custom React!</h1>
    </div>
  )
}

/*
const ReactElement = {
  type: 'a',
  props:{
      href: 'https://google.com',
      target:'_blank'
  },
  children: ['Click me to visit google']
}
*/

const anotherElement = (
  <a href='https://react.dev/' target='_blank'>Visite React Document</a>
)

const anotherUser = " Nice"

// use default method React.createElement()
 const ReactElement = React.createElement(
  'a',
  {href: 'https://react.dev/',target:'_blank'},
  'click to visite React!',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  ReactElement
 
)
