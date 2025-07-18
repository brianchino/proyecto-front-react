import '../stylePages/page.css'
import '../stylePages/login.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/authContext';
function Login(){
    const navigate = useNavigate();

    const [usuario,setUsuario] = useState('')
    const [contrasena,setContrasena] = useState('')

    const {setAuth,setAdmin} = useContext(AuthContext)
    const manejoLogin = (e,usuario,contrasena) => {
        e.preventDefault();
        if(usuario != '' && contrasena != ''){
            localStorage.setItem('usuario',usuario);
            localStorage.setItem('contraseña',contrasena);
            // localStorage.setItem('isAuth',true)
            setAuth(true)
            if (usuario == 'admin' && contrasena == '123') {
                setAdmin(true)
                // localStorage.setItem('isAdmin',true)
                // setIsAdmin(true);
            } 
            else {
                // localStorage.setItem('isAdmin',false)
                
                setAdmin(false); 
            }
                navigate(`/perfil/${usuario}`)
        }
        else{
            console.log('usuario y contraseña vacia')
        }
    }
    return(
        <div className='page login'>
            <Helmet>
            <meta charset="UTF-8"/>
            <meta name='login' content='inicio de sesion'/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>iniciar sesion</title>
            </Helmet> 
            <h1>INICIAR SESION</h1>
            <form action="/" method='post'>
                <label htmlFor='usuario'>usuario: </label>
                <input type='text' id='usuario' onChange={(e) => setUsuario(e.target.value)}/>
                <label htmlFor='password'>contraseña: </label>
                <input type="password" id='password' onChange={(e) => setContrasena(e.target.value)}/>
                <button type='submit' onClick={(e) => manejoLogin(e,usuario,contrasena)}>iniciar sesion</button>
            </form>

        </div>
    )
}
export default Login;