import { useContext } from 'react';
import '../styleComponents/tarjeta.css'
import styled from 'styled-components'
import { CarritoContext } from '../context/CarritoContext';
import { AuthContext } from '../context/authContext';

const BotonCompra = styled.button`
    padding: 0.5em 1em;
    background-color: #3483fa;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 0.85em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin: 0.5em;
    &:hover {
      background-color: #2968c8;
    }
    `;

function Tarjeta({producto,forShop}){
    const{agregarCarrito,eliminarDeCarrito} = useContext(CarritoContext)
    const {auth} = useContext(AuthContext)  
     
    return(
        <div className="tarjeta">
            <img className="imagen-producto"
                src={producto.image}
                alt={producto.title}/>
            <div className="contenido-producto">
            <h4 className="titulo-producto">{producto.title}</h4>
            <p className="precio-producto">${Number(producto.price).toFixed(2)}</p>
        </div>

        {forShop && auth &&
            <BotonCompra  onClick={() => {agregarCarrito(producto.id)}}>agregar</BotonCompra>
        }
        {!forShop &&
            <BotonCompra onClick={()=>{eliminarDeCarrito(producto.id)}}>eliminar</BotonCompra>
        }
      
    </div>
    )
}
export default Tarjeta;