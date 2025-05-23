import { useParams } from "react-router-dom";


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
            <p style={saludo}>
            bienvenido, {usuario}
                
            </p>
        </div>
    )
}
export default Perfil; 