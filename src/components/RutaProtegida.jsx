import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children ,isAuth}) 
{
  const auth = localStorage.getItem('isAuth') === 'true';
  return auth ? children : <Navigate to="/login" />;
}