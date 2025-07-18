import { useContext, useState } from 'react';
import '../stylePages/page.css'
import '../stylePages/administrador.css'
import { ProductosContext } from '../context/ProductosContext';
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from 'react-helmet-async';
function Administrador (){

    const {productos,actualizarProducto,eliminarProducto,crearProducto} = useContext(ProductosContext)
    const [productoEditandoId, setProductoEditandoId] = useState(null);
    const [formData,setFormData] = useState({})
    
    function handleEditar(producto){
        setProductoEditandoId(producto.id);
        setFormData({ ...producto });
    }
    function handleChange(campo,valor){
        setFormData((prev) => ({
        ...prev,// lo que ya tenia previamente antes de editar con set
        [campo]: valor
        }));
        
    }
    const [productoCreado, setProductoCreado] = useState({
    title: '',
    price: '',
    category: '',
    image: ''
    });
    function handleChangeCreate(campo,valor){
        setProductoCreado(prev => ({
        ...prev,
        [campo]: valor
    }));
    }
    function handleCreate(producto){
        const { title, price, category, image } = productoCreado;

        if (!title || !price || !category || !image) {
            alert('Todos los campos deben estar completos');
            return;
        }
    
        crearProducto(productoCreado);
    
        // Limpiar los campos después de crear
        setProductoCreado({
            title: '',
            price: '',
            category: '',
            image: ''
        });
    
    }
    const confirmarEliminacion = (producto) => {
    toast(({ closeToast }) => (
      <div>
        <p>¿Seguro que querés eliminar <strong>{producto.title}</strong>?</p>
        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <button
            onClick={() => {
              eliminarProducto(producto.id);
              toast.dismiss(); // cerrar todos los toasts
              toast.success("Producto eliminado");
            }}
            style={{ background: 'red', color: 'white', padding: '5px 10px' }}
          >
            Eliminar
          </button>
          <button
            onClick={() => toast.dismiss()}
            style={{ padding: '5px 10px' }}
          >
            Cancelar
          </button>
        </div>
      </div>
    ), {
      autoClose: false,
      closeOnClick: false
    });
    }
    return (
        <div className='page admin'>
            <Helmet>
                      <meta charset="UTF-8"/>
                      <meta name='administracion' content='configuracion de productos'/>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                      <title>administracion</title>
                      </Helmet> 
            <ToastContainer position="top-right"/>
            <form action="">
                {productos.map(producto => (
                    <div className="producto-form" key={producto.id}>
                        <span className="producto-label">producto n° {producto.id}</span>
                            <div className="inputs">
                                <input type="text" 
                                    placeholder="titulo" 
                                    defaultValue={producto.title}
                                    disabled={productoEditandoId !== producto.id}
                                    onChange={(e) => handleChange('title', e.target.value)}/>
                                <input type="number" 
                                    placeholder="precio" 
                                    defaultValue={producto.price} 
                                    disabled={productoEditandoId !== producto.id}
                                    onChange={(e) => handleChange('price', e.target.value)}/>
                                <input type="text" 
                                    placeholder="categoria" 
                                    defaultValue={producto.category} 
                                    disabled={productoEditandoId !== producto.id}
                                    onChange={(e) => handleChange('category', e.target.value)}/>
                                <input type="text" 
                                    placeholder="imagen" 
                                    defaultValue={producto.image} 
                                    disabled={productoEditandoId !== producto.id}
                                    onChange={(e) => handleChange('image', e.target.value)}/>
                                {(productoEditandoId !== producto.id) ?(
                                    <div>

                                        <button type="button" onClick={()=>handleEditar(producto)}>editar</button>
                                        <button type="button" className='botonEliminar'onClick={()=>confirmarEliminacion(producto)}>eliminar</button>

                                    </div>   ):(
                                    <button type="button" onClick={()=>{actualizarProducto(formData.id, formData);
                                                            setProductoEditandoId(null);}}>ok</button>
                                )}
                            </div>
                        
                        
                    </div>
                ))}
            </form>
            <div>
                <div className="inputs">
                              <input type="text" 
                                    placeholder="titulo"    
                                    value={productoCreado.title}                          
                                    onChange={(e)=>handleChangeCreate('title',e.target.value)}/>
                              <input type="number" 
                                    placeholder="precio"      
                                    value={productoCreado.price}                        
                                    onChange={(e)=>handleChangeCreate('price',e.target.value)}/>
                              <input type="text" 
                                    placeholder="categoria" 
                                    value={productoCreado.category}                                
                                    onChange={(e)=>handleChangeCreate('category',e.target.value)}/>
                              <input type="text" 
                                    placeholder="imagen"     
                                    value={productoCreado.image}              
                                    onChange={(e)=>handleChangeCreate('image',e.target.value)}/>
                <button type="button" className='botonCrear'onClick={()=>handleCreate(productoCreado)}>crear</button>             
                </div>
            </div>
                          
    </div>
            
        
    )
}
export default Administrador;