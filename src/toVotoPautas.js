import { useHistory } from "react-router-dom";


export function ToVotoPautas(props) {

    let history = useHistory();
  
    function handleClickToVoto() {
      props.setSearchField('')
      history.push("/elecciones-pautas-generales");
    }
  
    return (
      <button type="submit" onClick={handleClickToVoto} className='btnToPost'>
        Leer Post
      </button>
    );
  }