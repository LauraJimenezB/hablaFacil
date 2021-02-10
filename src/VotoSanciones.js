import './voto.css';
import { Share } from './share'
import Contador from "./Contador.js";
//import printJS from 'print-js';
import buttonPrint from './printer.svg';

export function VotoSanciones (props) {
  const votoBanner = props.posts.filter(
    (post) => post.categoria === "votoSanciones" && post.tipo === "banner"
  );
  /* const votoTextImg = props.posts.filter(
    (post) => post.categoria === "votoSeguridad" && post.tipo === "textoImg"
  ); */
  const votoTextos = props.posts.filter(
    (post) => post.categoria === "votoSanciones" && post.tipo === "texto"
  );
  const seguridadLikes = props.posts.filter(
    (post) => post.categoria === "votoSanciones" && post.tipo === "counter"
  );

  const numberOfLikes = seguridadLikes.map((slide) => (
    slide.likes
  ))[0];

  const likesId = seguridadLikes.map((slide) => (
    slide.id
  ))[0];

  const banner = votoBanner.map((slide) => (
    <div key={slide.id}>
      <p className="tituloBanner">{slide.titulo}</p>
    </div>
  ));

 /*  const textoImg = votoTextImg.map((slide) => (
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
  )); */
  const listTextos = votoTextos.map((slide) => (
    <div key={slide.id} className="texto">
      <p className="titulo">{slide.titulo}</p>
      <p className="subtitulo"> {slide.subtitulo}</p>
      <p className="contenido">{slide.contenido}</p>
    </div>
  ));
  /* const listSlides = votoSlides.map((slide) => (
    <div key={slide.id} className="slide">
      <div>
        <img src={slide.img} alt={slide.id} className="imgSlide" />
      </div>
      <span>{slide.contenido}</span>
    </div>
  )); */

  const print = () => {
    window.print();
  }

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
        }}
    />
);

  return (
    <main className="mainVoto" id='mainVoto'>
      <section className="banner">{banner}</section>
      <section className="textosContainer">{listTextos}</section>
      <section className='interactionContainer'>
        <ColoredLine color="black" />
        <p className="titleLikes">¿Te sirvió la publicación?</p>
        <Contador numberOfLikes={numberOfLikes} likesId={likesId}/>
      </section>
      <section className='shareContainer'>
        <Share/>
        <button className="button-print" onClick={()=>print()}>Imprimir <img src={buttonPrint} alt="button-print"></img></button>
      </section>
      <section className="comentarioCont">
      <div className="comentario">
        <p className="titleComentario">Déjanos tu comentario</p>
        <div
          className="fb-comments"
          data-href="https://hablafacilapp-20c5a.web.app/elecciones-sanciones"
          data-width="150"
          data-numposts="3"
          data-colorscheme="dark"
        ></div>
      </div>
      </section>
    </main>
  );
}
