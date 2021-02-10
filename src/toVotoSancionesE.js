import { useHistory } from "react-router-dom";


export function ToVotoSancionesE(props) {

    let history = useHistory();
  
    function handleClickToVoto() {
      history.push("/elecciones-sanciones");
    }
  
    return (
      <button type="submit" onClick={handleClickToVoto} className='btnToPost'>
        Leer Post
      </button>
    );
  }