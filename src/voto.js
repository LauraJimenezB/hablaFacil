import './voto.css';
import { ToVotoPautasE } from './toVotoPautasE.js';
import { ToVotoSancionesE } from './toVotoSancionesE.js';
import { ToVotoSeguridadE } from './toVotoSeguridadE.js';
/* import { Share } from './share'
import Contador from "./Contador.js";
import printJS from 'print-js';
import buttonPrint from './printer.svg';
 */
export function Voto(props) {
  const votoBanner = props.posts.filter(
    (post) => post.categoria === "voto" && post.tipo === "banner"
  );
  /* const votoTextos = props.posts.filter(
    (post) => post.categoria === "voto" && post.tipo === "texto"
  );
  const votoTextImg = props.posts.filter(
    (post) => post.categoria === "voto" && post.tipo === "textoImg"
  ); */

  const banner = votoBanner.map((slide) => (
    <div key={slide.id}>
      <p className="tituloBanner">{slide.titulo}</p>
    </div>
  ));

  /* const listTextos = votoTextos.map((slide) => (
    <div key={slide.id} className="texto">
      <p className="titulo">{slide.titulo}</p>
      <p className="subtitulo"> {slide.subtitulo}</p>
      <p className="contenido">{slide.contenido}</p>
    </div>
  ));

  const textoImg = votoTextImg.map((slide) => (
    <div key={slide.id} className="texto">
      <p className="titulo">{slide.titulo}</p>
      <p className="subtitulo"> {slide.subtitulo}</p>
      <div className="divImg">
        <img
          src={slide.img}
          alt={slide.id}
          className={slide.order === 4 ? "imgVoto1" : "imgVoto2"}
        />
      </div>
      <p className="contenido">{slide.contenido}</p>
    </div>
  ));
 */

  const allPostsSearch = props.posts.filter((post)=>post.categoria === "voto" && post.tipo === "posts");
  const slideBtn = (order) => {
    if(order===2){
    return <ToVotoPautasE/> 
    } else if(order===3){
      return(<ToVotoSeguridadE/>)
    } else {
      return(<ToVotoSancionesE/>)
    }
  }

  return (
    <main className="mainVoto" id='mainVoto'>
      <section className="banner">{banner}</section>
      {/* <section className="textosContainer">{listTextos}</section>
      <section className="textoImgContainer">{textoImg}</section>
      <section className="slideContainer">{listSlides}</section> */}
      <section className="textosContainer">{
          /* Retorna array de posts */
        // eslint-disable-next-line array-callback-return
        allPostsSearch.map((slide)=> 
        <div className="divCard" key={slide.id}>
            <img src={slide.img} className="cardImg" alt={slide.id}/>
            <div className="cardContent">
              <div className="cardTexto">
                <h4 className="cardTitulo">{slide.titulo}</h4>
                <p className="cardContenido">{slide.contenido}</p>
              </div>
              <div className="cardFooter">
                <p className="cardFecha">{slide.fecha}</p>
                {slideBtn(slide.order)}
              </div>
            </div>
        </div>
        )
        }</section>
    </main>
  );
}
