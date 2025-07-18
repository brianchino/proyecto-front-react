import '../stylePages/page.css'
import Tarjeta from '../components/Tarjeta'
import { useContext ,useState} from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async'
function Electronica({busqueda}){
    const {productos} = useContext(ProductosContext)
    const productosElectronica = productos.filter((producto) => (producto.category ==='electronics'))
    const productosFiltrados = productosElectronica.filter((producto) =>
                                producto.title.toLowerCase().includes(busqueda.toLowerCase()));

    const productosPorPagina = 8; // Cantidad de productos a mostrar por página
        const [paginaActual, setPaginaActual] = useState(1);
        // Calcular el índice de los productos a mostrar en la página actual
        const indiceUltimoProducto = paginaActual * productosPorPagina;
        const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
        const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);
    
    
        // Cambiar de página
        const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
        const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);
    
    return(
        
         <div className='page'>
          <Helmet>
                    <meta charset="UTF-8"/>
                    <meta name='electronica' content='precios de producots de electronica'/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>electronica</title>
                    </Helmet> 
          <ToastContainer></ToastContainer>
            <Row>
                   {productosActuales.map((producto) =>(
                        <div className=" col-12 col-md-4 col-lg-3" key={producto.id}>
                             <Tarjeta key={producto.id} producto={producto} forShop= {true} />
                    
                        </div>
                    ))}
            </Row>
            <div className="d-flex justify-content-center my-4">
                {Array.from({ length: totalPaginas }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => cambiarPagina(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
            </div>
        </div>
    )
}
export default Electronica;