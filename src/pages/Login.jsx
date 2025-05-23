import '../stylePages/page.css'
import '../stylePages/login.css'
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const manejoLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('auth','true');
        navigate('/perfil/usuario123')
    }
    return(
        <div className='page'>
            <h1>INICIAR SESION</h1>
            <form action="/" method='post'>
                <label htmlFor='email'>email: </label>
                <input type='email' id='email'/>
                <label htmlFor='password'>contraseña: </label>
                <input type="password" id='password'/>
                <button type='submit' onClick={manejoLogin}>iniciar sesion</button>
            </form>

        </div>
    )
}
export default Login;