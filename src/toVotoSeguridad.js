import { useHistory } from "react-router-dom";


export function ToVotoSeguridad(props) {

    let history = useHistory();
  
    function handleClickToVoto() {
      props.setSearchField('')
      history.push("/elecciones-medidas-sanitarias");
    }
  
    return (
      <button type="submit" onClick={handleClickToVoto} className='btnToPost'>
        Leer Post
      </button>
    );
  }