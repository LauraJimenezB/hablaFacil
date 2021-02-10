import './searchResult.css';
import { ToVotoPautas } from './toVotoPautas.js';
import { ToVotoSanciones } from './toVotoSanciones.js';
import { ToVotoSeguridad } from './toVotoSeguridad.js';

export function SearchResults(props) {

  const allPostsSearch = props.posts.filter((post)=>post.tipo === "posts");
  const slideBtn = (order) => {
    if(order===2){
    return <ToVotoPautas setSearchField={props.setSearchField}/> 
    } else if(order===3){
      return(<ToVotoSeguridad setSearchField={props.setSearchField}/>)
    } else {
      return(<ToVotoSanciones setSearchField={props.setSearchField}/>)
    }
  }

    return (
      <main className="mainResults">
        <p className="textResults">Resultados de "{props.searchField}"</p>
        <section>{
          /* Retorna array de posts */
        // eslint-disable-next-line array-callback-return
        allPostsSearch.filter((post)=>{
          if(props.searchField===''){
            return 'post'
          } else if(post.contenido.toLowerCase().includes(props.searchField.toLowerCase())) {
            return post
          }
        }).map((slide)=> 
        <div className="divCard" key={slide.id}>
            <img src={slide.img} className="cardImg" alt={slide.id}/>
            <div className="cardContent">
              <div className="cardTexto">
                <h4 className="cardTitulo">{slide.titulo}</h4>
                <p className="cardContenido">{slide.contenido}</p>
                <p className="cardFecha">{slide.fecha}</p>
                <div className="cardFooter">
                {slideBtn(slide.order)}
              </div>
              </div>
            </div>
        </div>
        )
        }</section>
      </main>
    );
  }

  export default SearchResults;