import { ToVoto } from './toVoto.js';
import { ToMesa } from './toMesa.js'
import logoHome from './logoHome.svg'
import ContadorHome from "./ContadorHome.js";
import ContadorHome2 from "./ContadorHome2.js";

export function Home(props) {

  const homeTextos = props.posts.filter(
    (post) => post.categoria === "home" && post.tipo === "texto"
  );
  const homeTextImg = props.posts.filter(
    (post) => post.categoria === "home" && post.tipo === "textoImg"
  );
  const homePosts = props.posts.filter((post)=>post.categoria==='home'&&post.tipo==='slide');

  const listTextos =homeTextos.map((slide) => (
    <div key={slide.id} className="texto">
      <p className="titulo">{slide.titulo}</p>
      <p className="subtitulo"> {slide.subtitulo}</p>
      <p className="contenido">{slide.contenido}</p>
      <p className="item">{slide.item1}</p>
      <p className="item">{slide.item2}</p>
      <p className="item">{slide.item3}</p>
    </div>
  ));

  const textoImg = homeTextImg.map((slide) => (
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
      <p className="contenidoLink">{slide.contenido}</p>
    </div>
  ));

    const listSlides = homePosts.map((slide)=> 
    <div className="divCardHome" key={slide.id}>
            <div className={slide.order===1 ? "cardTituloHome1" : "cardTituloHome2"}>
            <div className='imgDiv'><img src={logoHome} className="cardImgHome" alt={slide.id}/></div>
            <h4>{slide.titulo}</h4>
            </div>
            <div className="cardContentHome">
              <div className="cardTextoHome">
                <h4 className="cardTituloHome">{slide.subtitulo}</h4>
                <p className="cardContenidoHome">{slide.contenido}</p>
              </div>
              <div className="cardFooterHome">
                {slide.order===1 ? <ToVoto/> : <ToMesa/>}
                {slide.order===1 ? <ContadorHome/> : <ContadorHome2/>}
              </div>
            </div>
        </div>
    )
    return (
      <main>
        <section className='bannerHome'></section>
        <section className="textoImgContainer">{listTextos}</section>
         <section className="textoImgContainerLink">{textoImg}</section>
        <section className='textosContainerHome'><p className='titleTop'>INFO TOP DE HABLA FÁCIL</p>{listSlides}
        <p className='linkEnd'>Ver más sobre las elecciones</p>
        <p className='textEnd'>¡Eso es  todo!</p>
        <p className='textEnd2'>Esperamos que esta información te haya servido. Compártela con tus amigos y familiares.</p>
        </section>
      </main>
    );
  }