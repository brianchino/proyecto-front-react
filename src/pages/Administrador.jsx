import { useContext, useState } from 'react';
import '../stylePages/page.css'
import '../stylePages/administrador.css'
import { ProductosContext } from '../context/ProductosContext';
function Administrador (){

    const {productos,actualizarProducto,eliminarProducto,crearProducto} = useContext(ProductosContext)
    const [permitirEditar,setPermitirEditar] = useState(false)
    const [formData,setFormData] = useState({})
    
    function handleEditar(producto){
        setPermitirEditar(true)
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
    return (
        <div className='page admin'>
            <form action="">
                {productos.map(producto => (
                    <div className="producto-form" key={producto.id}>
                        <span className="producto-label">producto n° {producto.id}</span>
                        <div className="inputs">
                          <input type="text" 
                                placeholder="titulo" 
                                defaultValue={permitirEditar ? formData.title : producto.title}
                                disabled={!(permitirEditar)}
                                onChange={(e) => handleChange('title', e.target.value)}/>
                          <input type="number" 
                                placeholder="precio" 
                                defaultValue={producto.price} 
                                disabled={!(permitirEditar)}
                                onChange={(e) => handleChange('price', e.target.value)}/>
                          <input type="text" 
                                placeholder="categoria" 
                                defaultValue={producto.category} 
                                disabled={!(permitirEditar)}
                                onChange={(e) => handleChange('category', e.target.value)}/>
                          <input type="text" 
                                placeholder="imagen" 
                                defaultValue={producto.image} 
                                disabled={!(permitirEditar)}
                                onChange={(e) => handleChange('image', e.target.value)}/>
                          {!permitirEditar ?(
                           <div>

                                <button onClick={()=>handleEditar(producto)}>editar</button>
                                <button onClick={()=>eliminarProducto()}>eliminar</button>
                                
                           </div>   ):(
                            <button onClick={()=>actualizarProducto(formData.id,formData)}>ok</button>
                           )  
                          }
                        </div>
                        
                        
                    </div>
                ))}
            </form>
            <div>
                <div className="inputs">
                              <input type="text" 
                                    placeholder="titulo"                              
                                    onChange={(e)=>handleChangeCreate('title',e.target.value)}/>
                              <input type="number" 
                                    placeholder="precio"                              
                                    onChange={(e)=>handleChangeCreate('price',e.target.value)}/>
                              <input type="text" 
                                    placeholder="categoria"                                 
                                    onChange={(e)=>handleChangeCreate('category',e.target.value)}/>
                              <input type="text" 
                                    placeholder="imagen"                   
                                    onChange={(e)=>handleChangeCreate('image',e.target.value)}/>
                <button onClick={()=>handleCreate(productoCreado)}>crear</button>             
                </div>
            </div>
                          
    </div>
            
        
    )
}
export default Administrador;