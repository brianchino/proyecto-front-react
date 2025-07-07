import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx';
import {CarritoProvider} from './context/CarritoContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/proyecto-front-react/">
          
       <ProductosProvider>
        <CarritoProvider>
          <App />

        </CarritoProvider>
       </ProductosProvider>

    
    </BrowserRouter>
    
  </StrictMode>,
)
