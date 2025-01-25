import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App';
import GetMovie from './Components/GetMovie'; 
import PostMovie from './Components/PostMovie';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PostMovie />
    <GetMovie />
  </StrictMode>,
)
