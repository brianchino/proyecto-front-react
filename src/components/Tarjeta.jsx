import '../styleComponents/tarjeta.css'

function Tarjeta({producto,forShop,agregarCarrito}){
    
    return(
    <div className="tarjeta-producto">
      <img
        className="imagen-producto"
        src={producto.image}
        alt={producto.title}
      />
      <div className="contenido-producto">
        <h4 className="titulo-producto">{producto.title}</h4>
        <p className="precio-producto">${producto.price.toFixed(2)}</p>
        <p className="rating-producto">⭐ {producto.rating.rate} ({producto.rating.count})</p>
      </div>
      {forShop &&
      <button className='boton-agregar' onClick={() => {agregarCarrito(producto.id)}}>agregar</button>

      }
    </div>
    )
}
export default Tarjeta;