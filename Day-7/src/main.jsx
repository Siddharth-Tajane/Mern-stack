import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './style2.css'
import './style3.css'

import Component1 from './Components/Component1.jsx'
import Component2 from './Components/Component2.jsx'
import Component3 from './Components/Component3.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1></Component1>
    <Component2></Component2>
    <Component3></Component3> 
  </StrictMode>,
)
