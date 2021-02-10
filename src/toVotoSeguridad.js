import { useHistory } from "react-router-dom";


export function ToVotoSeguridad() {

    let history = useHistory();
  
    function handleClickToVoto() {
      history.push("/elecciones-medidas-sanitarias");
    }
  
    return (
      <button type="submit" onClick={handleClickToVoto} className='btnToPost'>
        Leer Post
      </button>
    );
  }