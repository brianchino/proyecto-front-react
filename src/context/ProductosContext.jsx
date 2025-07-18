import { createContext,useState,useEffect } from "react";

export const ProductosContext = createContext();

export function ProductosProvider ({children}){
    
    const [productos,setProductos] = useState([]);
    const [error,setError] = useState(null);



    const API_URL = 'https://684dc00a65ed0871391709b3.mockapi.io/apiProducts/products'
  
    async function fetchProductos(){
        // const respuesta = await fetch(API_URL)
        // const data = await respuesta.json()
        // setProductos(data)
        try {
      const respuesta = await fetch(API_URL);
      if (!respuesta.ok) throw new Error("No se pudieron obtener los productos.");
      const data = await respuesta.json();
      setProductos(data);
      setError(null); // Limpiar errores anteriores si todo salió bien
      } catch (err) {
      console.error(err);
      setError(err.message); // Guardar mensaje de error para mostrar en UI
    }
    };

    useEffect(()=>{fetchProductos()},[])
    
    async function crearProducto(nuevoProducto) {
 
    // await fetch(API_URL,{
    //   method:'POST',
    //   headers:{"Content-Type": "application/json"},
    //   body: JSON.stringify(nuevoProducto)
    // })
    // fetchProductos()
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoProducto)
      });
      if (!res.ok) throw new Error("Error al crear producto.");
      await fetchProductos();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }
  async function eliminarProducto(id){
    // await fetch(`${API_URL}/${id}`,{
    //   method:'DELETE'
    // })
    // fetchProductos()  
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error("Error al eliminar producto.");
      await fetchProductos();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }
  async function actualizarProducto(id,nuevoProducto) {
    // await fetch(`${API_URL}/${id}`,{
    //   method:'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(nuevoProducto),
    // })
    // fetchProductos() 
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto),
      });
      if (!res.ok) throw new Error("Error al actualizar producto.");
      await fetchProductos();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }

    return(
        <ProductosContext.Provider value={{productos,crearProducto,eliminarProducto,actualizarProducto}}>
            {children}
        </ProductosContext.Provider>
    )
}