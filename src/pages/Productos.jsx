import Tarjeta from '../components/Tarjeta';
import '../stylePages/productos.css'
import '../stylePages/page.css'

function Productos({productos,cargando,error,productosCarrito,setProductosCarrito,agregarCarrito}){
    if(cargando) return <p> cargando productos</p>
    if(error) return <p>{error}</p>
    return(
        <div className="page productos">
            {
                productos.map((producto) => <Tarjeta key={producto.id} producto={producto} productosCarrito={productosCarrito} setProductosCarrito={setProductosCarrito} agregarCarrito={agregarCarrito}/>)
            }
        </div>
    )
}
export default Productos;