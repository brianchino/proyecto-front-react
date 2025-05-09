import { useState } from 'react'
import { BrowserRouter ,Link,Routes,Route} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Productos from './pages/Productos';
import Electronica from './pages/Electronica';
import Login from './pages/Login';
import Carrito from './pages/Carrito';

function App() {
  

  return (
    <>
      <BrowserRouter>
            <nav>
                <Link className='link' to='/'>logo</Link>
                <div className='navBar'>
                  <Link className='link' to='/'>home</Link>
                  <Link className='link' to='/productos'>productos</Link>
                  <Link className='link' to='/electronica'>electronica</Link>
                  <Link className='link' to='/Login'>login</Link>
                  <Link className='link' to='/carrito'><i>carro</i></Link>
                </div>
            </nav>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/productos' element={<Productos />}></Route>
              <Route path='/electronica' element={<Electronica />}></Route>
              <Route path='/Login' element={<Login />}></Route>
              <Route path='/carrito' element={<Carrito />}></Route>
            </Routes>
            <footer>pie de pagina</footer>
        </BrowserRouter>
    </>
  )
}

export default App
