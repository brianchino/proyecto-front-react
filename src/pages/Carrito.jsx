import '../stylePages/page.css'
import Tarjeta from '../components/Tarjeta'
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async';
import { Row } from 'react-bootstrap'
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
            <Helmet>
                      <meta charset="UTF-8"/>
                      <meta name='carrito' content='productos del carrito'/>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                      <title>carrito</title>
                      </Helmet> 
            <Row>{

                carrito.map((producto) => 
                    <div className=" col-12 col-md-4 col-lg-3">
                    <Tarjeta key={producto.id} producto={producto} forShop={false}/>
                    </div>
                )
            }
            </Row>
            {carrito.length > 0
            &&    
            <BotonVaciar onClick={()=>{vaciarCarrito()}}>vaciar</BotonVaciar>
            }
        </div>
    )
}
export default Carrito;