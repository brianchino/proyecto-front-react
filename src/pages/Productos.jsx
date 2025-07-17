import Tarjeta from '../components/Tarjeta';
import '../stylePages/page.css'
import { ProductosContext } from '../context/ProductosContext';
import {useContext} from 'react'
import {Col, Row} from 'react-bootstrap'
function Productos({busqueda}){
    const {productos} = useContext(ProductosContext)

    const productosFiltrados = productos.filter((producto) =>
                                producto.title.toLowerCase().includes(busqueda.toLowerCase()));
    return(
        <div className='page'>
            <Row>
                   {productosFiltrados.map((producto) =>(
                        <div key={producto.id} className=" col-12 col-md-4 col-lg-3">
                             <Tarjeta key={producto.id} producto={producto} forShop= {true} />
                    
                        </div>
                    ))}
            </Row>
        </div>
    )
}
export default Productos;