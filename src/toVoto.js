import { useHistory } from "react-router-dom";


export function ToVoto() {

    let history = useHistory();
  
    function handleClickToVoto() {
      history.push("/elecciones");
    }
  
    return (
      <button type="submit" onClick={handleClickToVoto} className='btnTo'>
        Leer Post
      </button>
    );
  }