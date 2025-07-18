import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx';
import {CarritoProvider} from './context/CarritoContext.jsx'
import { AuthProvider } from './context/authContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>

    <BrowserRouter basename="/proyecto-front-react/">
       <AuthProvider>
       <ProductosProvider>
        <CarritoProvider>
          <App />

        </CarritoProvider>
       </ProductosProvider>

        </AuthProvider>   
    
    </BrowserRouter>
    </HelmetProvider>
    
  </StrictMode>,
)
