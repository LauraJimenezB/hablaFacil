import './voto.css';
import { Share } from './share';
import Contador from "./Contador.js";
import buttonPrint from './printer.svg';

export function MiembroDeMesa(props) {
  const mesaBanner = props.posts.filter((post)=>post.categoria==='mesa'&&post.tipo==='banner');
  const mesaTextos = props.posts.filter((post)=>post.categoria==='mesa'&&post.tipo==='texto');
  const mesaSlides = props.posts.filter((post)=>post.categoria==='mesa'&&post.tipo==='slide');

  const mesaLink = props.posts.filter(
    (post) => post.categoria === "mesa" && post.tipo === "link"
  );
  const mesaLikes = props.posts.filter(
    (post) => post.categoria === "mesa" && post.tipo === "counter"
  );

  const numberOfLikes = mesaLikes.map((slide) => (
    slide.likes
  ))[0];

  const likesId = mesaLikes.map((slide) => (
    slide.id
  ))[0];

  const banner = mesaBanner.map((slide)=> 
  <div key={slide.id}>
      <p className='tituloBanner'>{slide.titulo}</p>
  </div>
  )
    const listTextos = mesaTextos.map((slide)=> 
    <div key={slide.id} className='texto'>
        <p className='titulo'>{slide.titulo}</p>
        <p className='subtitulo'> {slide.subtitulo}</p>
        <p className='contenido'>{slide.contenido}</p>
    </div> 
    )

    const listSlides = mesaSlides.map((slide)=> 
    <div key={slide.id} className='slide'>
        <span>{slide.contenido}</span>
    </div>
    )

    const linkFuente = mesaLink.map((slide) => (
      <div key={slide.id} className="linkContainer">
        <img
            src={slide.img}
            alt={slide.id}
          />
        <a href={slide.fuente}><p className='fuente'>Ir a la fuente</p></a>
      </div>
    ));
  
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
      <main className='mainVoto' id='mainVoto'>
        <section className='bannerMesa'>{banner}</section>
        <section className='textosContainer'>{listTextos}</section>
        <section className='slideContainer'>{listSlides}</section>
        <section>{linkFuente}</section>
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
          data-href="https://hablafacilapp-20c5a.web.app/miembrodemesa"
          data-width="150"
          data-numposts="3"
          data-colorscheme="dark"
        ></div>
      </div>
      </section>
      </main>
    );
  }
  