import { createContext,useState,useEffect } from "react";

export const ProductosContext = createContext();

export function ProductosProvider ({children}){
    
    const [productos,setProductos] = useState([]);




    const API_URL = 'https://684dc00a65ed0871391709b3.mockapi.io/apiProducts/products'
  
    async function fetchProductos(){
    const respuesta = await fetch(API_URL)
    const data = await respuesta.json()
    setProductos(data)
    };

    useEffect(()=>{fetchProductos()},[])
    
    async function crearProducto(nuevoProducto) {
 
    await fetch(API_URL,{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(nuevoProducto)
    })
    fetchProductos()
  }
  async function eliminarProducto(id){
    await fetch(`${API_URL}/${id}`,{
      method:'DELETE'
    })
    fetchProductos()  
  }
  async function actualizarProducto(id,nuevoProducto) {
    await fetch(`${API_URL}/${id}`,{
      method:'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoProducto),
    })
    fetchProductos() 
  }

    return(
        <ProductosContext.Provider value={{productos,crearProducto,eliminarProducto,actualizarProducto}}>
            {children}
        </ProductosContext.Provider>
    )
}