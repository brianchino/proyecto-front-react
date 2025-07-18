import { createContext,useState,useEffect } from "react";

export const ProductosContext = createContext();

export function ProductosProvider ({children}){
    
    const [productos,setProductos] = useState([]);
    const [error,setError] = useState(null);
    const API_URL = 'https://684dc00a65ed0871391709b3.mockapi.io/apiProducts/products'
  
    async function fetchProductos(){
        
        try {
            const respuesta = await fetch(API_URL);
            
            if (!respuesta.ok) throw new Error("No se pudieron obtener los productos.");
            const data = await respuesta.json();
            setProductos(data);
            setError(null); // Limpiar errores anteriores si todo salió bien
        } 
        catch (err) {
            console.error(err);
            setError(err.message); 
        }
    };

    useEffect(()=>{fetchProductos()},[])
    
    async function crearProducto(nuevoProducto) {
 
        try {
            const res = await fetch(API_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoProducto)
            });
          
            if (!res.ok) throw new Error("Error al crear producto.");
            await fetchProductos();
        } 
        catch (err) {
            console.error(err);
            setError(err.message);
        }
    }
    async function eliminarProducto(id){
     
        try {
            const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!res.ok) throw new Error("Error al eliminar producto.");
        await fetchProductos();
        } 
        catch (err) {
            console.error(err);
            setError(err.message);
        }
    }

    async function actualizarProducto(id,nuevoProducto) {
    
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoProducto),
            });
        if (!res.ok) throw new Error("Error al actualizar producto.");
        await fetchProductos();
        } 
        catch (err) {
            console.error(err);
            setError(err.message);
        }
    }

    return(
        <ProductosContext.Provider value={{productos,crearProducto,eliminarProducto,actualizarProducto,error}}>
            {children}
        </ProductosContext.Provider>
    )
}