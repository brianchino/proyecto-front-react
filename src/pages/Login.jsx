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
            localStorage.setItem('usuario',usuario);
            localStorage.setItem('contraseña',contrasena);
            localStorage.setItem('isAuth',true)
            //setIsAuth(true)
            if (usuario == 'admin' && contrasena == '123') {
                localStorage.setItem('isAdmin',true)
                // setIsAdmin(true);
            } 
            else {
                localStorage.setItem('isAdmin',false)
                //setIsAdmin(false); 
            }
                navigate(`/perfil/${usuario}`)
        }
        else{
            console.log('usuario y contraseña vacia')
        }
    }
    return(
        <div className='page login'>
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