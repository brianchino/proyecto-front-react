import {Link,Routes,Route, useNavigate} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Productos from './pages/Productos';
import Electronica from './pages/Electronica';
import Login from './pages/Login';
import Carrito from './pages/Carrito';
import RutaProtegida from './components/RutaProtegida';
import Perfil from './pages/Perfil';
import Administrador from './pages/Administrador';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faCartShopping,faFaceSmileBeam} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


function App() {

  // const [isAuth,setIsAuth] = useState(false)
  // const [isAdmin,setIsAdmin] =useState(false) 
  
  const navigate = useNavigate()

  const cerrarSesion = () => {
   
    localStorage.removeItem('usuario');
    localStorage.removeItem('contraseña');
    localStorage.setItem('isAuth',false);
    localStorage.setItem('isAdmin',false);
    navigate('/login');
  }
  
  const [busqueda,setBusqueda] = useState('')
  
  return (
    <div className='app'>
           
      
            <nav>
                <Link className='link' to='/'><FontAwesomeIcon icon={faFaceSmileBeam} /></Link>
                <input type="text" className="busqueda" placeholder='busqueda'onChange={(e)=> setBusqueda(e.target.value)}/>
                <div className='navBar'>
                  <Link className='link' to='/'>home</Link>
                  <Link className='link' to='/productos'>productos</Link>
                  <Link className='link' to='/electronica'>electronica</Link>
                  {((localStorage.getItem('isAuth')) == 'false') ? (
                    <Link className='link' to='/login'>login</Link>
                  ): (
                    // <button className='boton-cerrar-sesion' onClick={cerrarSesion}>CerrarSession</button>
                      <>
                      <Link className='link' to={`/perfil/${localStorage.getItem('usuario')}`}>perfil</Link>
                      <Link className='link' to='/carrito'>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </Link>
                      <Link className='link' to='/' onClick={cerrarSesion}>logout</Link>
                      {
                        ((localStorage.getItem('isAdmin')) == 'true') && (
                            <Link className="link" to='/administrador'>admin</Link>
                        )
                        
                      }
                    
                    </>
                  )}
                  
                  

                </div>
            </nav>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/productos' element={<Productos busqueda={busqueda}/>} />

              <Route path='/electronica' element={<Electronica busqueda={busqueda} />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/carrito' element={<RutaProtegida ><Carrito /></RutaProtegida>} />
              <Route path='/perfil/:usuario' element={<RutaProtegida > <Perfil/> </RutaProtegida>}></Route>
              <Route path='/administrador' element={<RutaProtegida > <Administrador/> </RutaProtegida>}></Route>
            </Routes>
            
            <footer>
              <div>
                <FontAwesomeIcon  icon={faCopyright} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </footer>
        
    </div>
  )
}

export default App

