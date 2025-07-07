import {Link,Routes,Route, useNavigate} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Productos from './pages/Productos';
import Electronica from './pages/Electronica';
import Login from './pages/Login';
import Carrito from './pages/Carrito';
import RutaProtegida from './components/RutaProtegida';
import Perfil from './pages/Perfil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faCartShopping,faFaceSmileBeam} from '@fortawesome/free-solid-svg-icons';


function App() {


   

  const isAuth = localStorage.getItem('auth') 
  const navigate = useNavigate()

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  }
  
  
  return (
    <>

      
            <nav>
                <Link className='link' to='/'><FontAwesomeIcon icon={faFaceSmileBeam} /></Link>
                <div className='navBar'>
                  <Link className='link' to='/'>home</Link>
                  <Link className='link' to='/productos'>productos</Link>
                  <Link className='link' to='/electronica'>electronica</Link>
                  {isAuth && (
                    <>
                      <Link className='link' to={`/perfil/${localStorage.getItem('usuario')}`}>perfil</Link>
                      <Link className='link' to='/carrito'>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </Link>
                    </>
                  )}
                  {!isAuth ? (
                    <Link className='link' to='/login'>login</Link>
                  ): (
                    // <button className='boton-cerrar-sesion' onClick={cerrarSesion}>CerrarSession</button>
                    <Link className='link' to='/' onClick={cerrarSesion}>cerrar Sesion</Link>
                  )}
                  
                  

                </div>
            </nav>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/productos' element={<Productos/>} />

              <Route path='/electronica' element={<Electronica />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/carrito' element={<RutaProtegida><Carrito /></RutaProtegida>} />
              <Route path='/perfil/:usuario' element={<RutaProtegida> <Perfil/> </RutaProtegida>}></Route>
            </Routes>
            <footer>
              <div>
                <FontAwesomeIcon  icon={faCopyright} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </footer>
        
    </>
  )
}

export default App

