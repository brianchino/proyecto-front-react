import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Perfil(){

    const saludo = {
        width:'fit-content',
        fontSize:'5em',
        margin:'auto',
        fontFamily: 'Agbalumo, system-ui'
  
    }
    const {usuario} = useParams();
    return(
        <div  className="page">
            <Helmet>
          <meta charset="UTF-8"/>
          <meta name='perfil' content='informacion personal'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>perfil</title>
          </Helmet> 
            <p style={saludo}>
            bienvenido, {usuario}
                
            </p>
        </div>
    )
}
export default Perfil; 