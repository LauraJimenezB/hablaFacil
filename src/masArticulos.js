import './searchResult.css';

export function MasArticulos(props) {
  const allPostsSearch = props.posts.filter((post)=>post.categoria==='posts');

    return (
      <main className="mainResults">
        <p className='subtituloMas'>Más articulos sobre este tema</p>
        <section>{
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
                <p>{slide.fecha}</p>
              </div>
            </div>
        </div>
        )
        }</section>
      </main>
    );
  }