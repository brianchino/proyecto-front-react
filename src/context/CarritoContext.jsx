import { createContext, useContext ,useState} from "react";
import { ProductosContext } from "./ProductosContext";

export const CarritoContext = createContext()

export function CarritoProvider({children}){
    const [carrito,setCarrito] = useState([]);
    const {productos} = useContext(ProductosContext)

    function agregarCarrito(id){
        const productoNuevo = productos.find(producto => producto.id === id)
        setCarrito([...carrito,productoNuevo])
    }

    function eliminarDeCarrito(id){
        const nuevoCarrito = carrito.filter(producto => producto.id != id)
        setCarrito(nuevoCarrito)
    }
    function vaciarCarrito(){
        setCarrito([])
    }
    return(
        <CarritoContext.Provider value={{agregarCarrito,carrito,eliminarDeCarrito,vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )

}