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
import { faCartShopping,faFaceSmileBeam,faRightToBracket, faRightFromBracket,faGear} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { AuthContext } from "./context/authContext";


function App() {

  // const [isAuth,setIsAuth] = useState(false)
  // const [isAdmin,setIsAdmin] =useState(false) 
  
  const navigate = useNavigate()

  const cerrarSesion = () => {
   
    localStorage.removeItem('usuario');
    localStorage.removeItem('contraseña');
    setAuth(false)
    setAdmin(false)
    navigate('/login');
  }
  
  const [busqueda,setBusqueda] = useState('')
  
  const {auth,admin,setAuth,setAdmin} = useContext(AuthContext)

  return (
    <div className='app'>
           
      
            <nav>
                <Link className='link' to='/'><FontAwesomeIcon icon={faFaceSmileBeam} /></Link>
                <input type="text" className="busqueda" placeholder='busqueda'onChange={(e)=> setBusqueda(e.target.value)}/>
                <div className='navBar'>
                  <Link className='link' to='/'>home</Link>
                  <Link className='link' to='/productos'>productos</Link>
                  <Link className='link' to='/electronica'>electronica</Link>
                  {!(auth) ? (
                    <Link className='link' to='/login'><FontAwesomeIcon icon={faRightToBracket} /></Link>
                  ): (
                    // <button className='boton-cerrar-sesion' onClick={cerrarSesion}>CerrarSession</button>
                      <>
                      <Link className='link' to={`/perfil/${localStorage.getItem('usuario')}`}>perfil</Link>
                      <Link className='link' to='/carrito'>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </Link>
                      <Link className='link' to='/' onClick={cerrarSesion}><FontAwesomeIcon icon={faRightFromBracket} /></Link>
                      {
                        (admin) && (
                            <Link className="link" to='/administrador'><FontAwesomeIcon icon={faGear} /></Link>
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

