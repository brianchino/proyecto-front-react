import '../stylePages/page.css'
import Tarjeta from '../components/Tarjeta'
import '../stylePages/productos.css'
function Electronica({productos,agregarCarrito}){
    const productosElectronica = productos.filter((producto) => (producto.category ==='electronics'))
    return(
        <div className='page productos'>
            {
            productosElectronica.map((producto) => 
               <Tarjeta key={producto.id} producto={producto}  forShop={true} agregarCarrito={agregarCarrito}/>)
            }
        </div>
    )
}
export default Electronica;