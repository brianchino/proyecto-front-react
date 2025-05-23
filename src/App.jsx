import { useEffect, useState } from 'react'
import { BrowserRouter ,Link,Routes,Route, useNavigate} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Productos from './pages/Productos';
import Electronica from './pages/Electronica';
import Login from './pages/Login';
import Carrito from './pages/Carrito';
import RutaProtegida from './components/RutaProtegida';
import Perfil from './pages/Perfil';
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
 
   const [productosCarrito,setProductosCarrito] = useState([])

  function agregarCarrito(id,productosCarrito,setProductosCarrito){
    const productoNuevo = productos.find(producto => producto.id === id)
    setProductosCarrito([...productosCarrito,productoNuevo])
    console.log(productosCarrito)
  }

  const isAuth = localStorage.getItem('auth') === 'true'  
  const navigate = useNavigate()

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  }
  
  
  return (
    <>

      
            <nav>
                <Link className='link' to='/'>logo</Link>
                <div className='navBar'>
                  <Link className='link' to='/'>home</Link>
                  <Link className='link' to='/productos'>productos</Link>
                  <Link className='link' to='/electronica'>electronica</Link>
                  {isAuth && (
                    <Link className='link' to='/perfil/usuario123'>perfil</Link>       
                  )}
                  {!isAuth ? (
                    <Link className='link' to='/Login'>login</Link>
                  ): (
                    <button className='boton-cerrar-sesion' onClick={cerrarSesion}>CerrarSession</button>
                  )}
                  
                  <Link className='link' to='/carrito'><i>carro</i></Link>

                </div>
            </nav>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/productos' element={<Productos  productos={productos} cargando={cargando} error={error}
              productosCarrito={productosCarrito} setProductosCarrito={setProductosCarrito} agregarCarrito={agregarCarrito}/>} />

              <Route path='/electronica' element={<Electronica />} />
              <Route path='/Login' element={<Login />}/>
              <Route path='/carrito' element={<Carrito productosCarrito={productosCarrito} />} />
              <Route path='/perfil/:usuario' element={<RutaProtegida> <Perfil/> </RutaProtegida>}></Route>
            </Routes>
            <footer>pie de pagina</footer>
        
    </>
  )
}

export default App
