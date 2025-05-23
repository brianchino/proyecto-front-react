import Tarjeta from '../components/Tarjeta';
import '../stylePages/productos.css'
import '../stylePages/page.css'

function Productos({productos,cargando,error,agregarCarrito}){
    if(cargando) return <p> cargando productos</p>
    if(error) return <p>{error}</p>
    return(
        <div className="page productos">
            {
                productos.map((producto) => <Tarjeta key={producto.id} producto={producto} forShop= {true} agregarCarrito={agregarCarrito}/>)
            }
        </div>
    )
}
export default Productos;