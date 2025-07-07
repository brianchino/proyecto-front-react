import '../stylePages/page.css'
import '../stylePages/login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login(){
    const navigate = useNavigate();

    const [usuario,setUsuario] = useState('')
    const [contrasena,setContrasena] = useState('')

    
    const manejoLogin = (e,usuario,contrasena) => {
        e.preventDefault();
        if(usuario != '' && contrasena != ''){

            if (usuario=='admin' && contrasena == '123'){
                
            }
            else
            {
                localStorage.setItem('usuario',usuario);
                localStorage.setItem('contraseña',contrasena);
                localStorage.setItem('auth',true)
            }
            navigate(`/perfil/${usuario}`)
        }
    }
    return(
        <div className='page'>
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