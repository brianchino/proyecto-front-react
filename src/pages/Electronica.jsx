import '../stylePages/page.css'
import Tarjeta from '../components/Tarjeta'
import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { Row } from 'react-bootstrap'
function Electronica({busqueda}){
    const {productos} = useContext(ProductosContext)
    const productosElectronica = productos.filter((producto) => (producto.category ==='electronics'))
    const productosFiltrados = productosElectronica.filter((producto) =>
                                producto.title.toLowerCase().includes(busqueda.toLowerCase()));
    return(
        
         <div className='page'>
            <Row>
                   {productosFiltrados.map((producto) =>(
                        <div className=" col-12 col-md-4 col-lg-3" key={producto.id}>
                             <Tarjeta key={producto.id} producto={producto} forShop= {true} />
                    
                        </div>
                    ))}
            </Row>
        </div>
    )
}
export default Electronica;