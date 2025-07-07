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
    
    

    return(
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}