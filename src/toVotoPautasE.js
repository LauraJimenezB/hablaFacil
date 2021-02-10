import { useHistory } from "react-router-dom";


export function ToVotoPautasE(props) {

    let history = useHistory();
  
    function handleClickToVoto() {
      history.push("/elecciones-pautas-generales");
    }
  
    return (
      <button type="submit" onClick={handleClickToVoto} className='btnToPost'>
        Leer Post
      </button>
    );
  }