import Tarjeta from '../components/Tarjeta';
import '../stylePages/productos.css'
import '../stylePages/page.css'
function Productos({productos,cargando,error}){
    if(cargando) return <p> cargando productos</p>
    if(error) return <p>{error}</p>
    return(
        <div className="page productos">
            {
                productos.map((producto) => <Tarjeta producto={producto}/>)
            }
        </div>
    )
}
export default Productos;