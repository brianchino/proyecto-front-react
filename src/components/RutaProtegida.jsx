import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export default function RutaProtegida({ children}) {
    const {auth} = useContext(AuthContext) ;
    return auth ? children : <Navigate to="/login" />;
}