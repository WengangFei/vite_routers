import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/home' element={ <Home />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/service' element={ <Service />}/>
       </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
