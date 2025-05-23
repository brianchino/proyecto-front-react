import { useParams } from "react-router-dom";

function Perfil(){
    const {usuario} = useParams();
    return(
        <div>
            bienvenido, {usuario}
        </div>
    )
}
export default Perfil; 