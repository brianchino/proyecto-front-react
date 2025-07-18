import '../stylePages/page.css'
import '../stylePages/home.css';
import {Helmet} from 'react-helmet-async'
function Home(){
    return(
        <div className='page home'>
          <Helmet>
          <meta charset="UTF-8"/>
          <meta name='descripcion' content='pagina oficial'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>tienda de ropa</title>
          </Helmet> 
            <section className="bienvenida">
            <h1>Bienvenido a ChinoShop</h1>
                <p>
                  En nuestra tienda vas a encontrar productos de calidad en distintas categorías:
                  ropa, electrónica, joyería, accesorios y más.
                </p>
            </section>

          <section className="imagenes-home">
            <div className="imagen-box">
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Producto destacado" />
              <p>Calidad y estilo en cada producto</p>
            </div>
            <div className="imagen-box">
              <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Ropa masculina" />
              <p>Ropa masculina premium</p>
            </div>
            <div className="imagen-box">
              <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="Joyas" />
              <p>Accesorios elegantes y únicos</p>
            </div>
          </section>

          <section className="info-adicional">
            <h2>¿Por qué elegirnos?</h2>
            <ul>
              <li>✅ Envíos rápidos y seguros</li>
              <li>✅ Productos originales y bien valorados</li>
              <li>✅ Atención personalizada</li>
              <li>✅ Variedad de categorías</li>
            </ul>
          </section>
        </div>
        
    )
}
export default Home;