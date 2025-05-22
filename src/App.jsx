import { useEffect, useState } from 'react'
import { BrowserRouter ,Link,Routes,Route} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Productos from './pages/Productos';
import Electronica from './pages/Electronica';
import Login from './pages/Login';
import Carrito from './pages/Carrito';

function App() {
  const [productos,setProductos] = useState([]);
  const [cargando,setCargando] = useState(true);
  const[error,setError] = useState(null);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos)
        setCargando(false)
      })
      .catch((error) => {
        setError('hubo un error')
        setCargando(false)
      })
  },[])
 

  return (
    <>

      <BrowserRouter basename='/proyecto-front-react/'>
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
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<Productos  productos={productos} cargando={cargando} error={error}/>} />
              <Route path='/electronica' element={<Electronica />} />
              <Route path='/Login' element={<Login />}/>
              <Route path='/carrito' element={<Carrito />} />
            </Routes>
            <footer>pie de pagina</footer>
        </BrowserRouter>
    </>
  )
}

export default App
