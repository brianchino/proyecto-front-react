import Tarjeta from '../components/Tarjeta';
// import '../stylePages/productos.css'
import '../stylePages/page.css'
import { ProductosContext } from '../context/ProductosContext';
import {useContext} from 'react'
import {Col, Row} from 'react-bootstrap'
function Productos(){
    const {productos} = useContext(ProductosContext)
    return(
        <div className='page'>
            <Row>
                   {productos.map((producto) =>(
                        <div key={producto.id} className=" col-12 col-md-4 col-lg-3">
                             <Tarjeta key={producto.id} producto={producto} forShop= {true} />
                    
                        </div>
                    ))}
            </Row>
        </div>
    )
}
export default Productos;