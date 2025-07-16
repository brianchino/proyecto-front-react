import { useContext } from 'react';
import '../stylePages/page.css'
import '../stylePages/administrador.css'
import { ProductosContext } from '../context/ProductosContext';
function Administrador (){

    const {productos} = useContext(ProductosContext)
    return (
        <div className='page admin'>
            <form action="">
                {productos.map(producto => (
                    <div className="producto-form" key={producto.id}>
                        <span className="producto-label">producto n° {producto.id}</span>
                        <div className="inputs">
                          <input type="text" placeholder="titulo" defaultValue={producto.title} />
                          <input type="text" placeholder="precio" defaultValue={producto.price} />
                          <input type="text" placeholder="categoria" defaultValue={producto.category} />
                          <input type="text" placeholder="imagen" defaultValue={producto.image} />
                          <button>boton</button>
                          <button>boton</button>
                        </div>
                        
                        
                    </div>
                ))}
            </form>
        </div>
    )
}
export default Administrador;