import '../stylePages/page.css'
import Tarjeta from '../components/Tarjeta'
function Carrito({productosCarrito}){

    return(
        <div className='page'>
            {
                productosCarrito.map((producto) => 
                <Tarjeta key={producto.id} producto={producto} forShop={false}/>
                )
            }
        </div>
    )
}
export default Carrito;