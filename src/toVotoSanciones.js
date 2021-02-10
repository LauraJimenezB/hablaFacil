import { useHistory } from "react-router-dom";


export function ToVotoSanciones() {

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