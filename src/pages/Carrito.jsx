import '../stylePages/page.css'
import Tarjeta from '../components/Tarjeta'
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import styled from 'styled-components'
const BotonVaciar = styled.button`
  
       padding: 1rem 2rem;
       background-color:rgb(229, 19, 19);
       color: white;
       border: none;
       border-radius: 5px;
       font-size: 1.5em;
       font-weight: bold;
       cursor: pointer;
       transition: background-color 0.2s ease;
       margin: 0.5em;

       &:hover {
         background-color:rgb(112, 6, 6);
       }`;
function Carrito(){
    const {carrito,vaciarCarrito} = useContext(CarritoContext)
    return(
        <div className='page'>
            {
                carrito.map((producto) => 
                <Tarjeta key={producto.id} producto={producto} forShop={false}/>
                )
            }
            {carrito.length > 0
            &&    
            <BotonVaciar onClick={()=>{vaciarCarrito()}}>vaciar</BotonVaciar>
            }
        </div>
    )
}
export default Carrito;