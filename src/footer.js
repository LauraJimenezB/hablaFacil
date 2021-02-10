import logoPic from './logoFooterA.svg'
/* import fbPic from './fbFooter.svg'
import instaPic from './instaFooter.svg' */

export function FooterH () {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerImgDiv">
          <img src={logoPic} alt={"logoF pic"} className="imgFooter" />
        </div>
        <div className="footerDiv">
          {/* <p>Encuentranos en:</p>
          <div>
            <a href="/#">
              <img src={fbPic} alt={"fbF pic"} className="imgF" />
            </a>
            <a href="https://www.instagram.com/hablafacilpe/">
              <img src={instaPic} alt={"instaF pic"} className="imgF" />
            </a>
          </div>
          <br /> */}
          <p>Somos <span>Habla Fácil</span> </p>
          <p>Aqui desmenuzamos la información para que tu no tengas que hacerlo</p>
          <p>Hecho en Perú con amor del bueno</p>
          <br />
          <a href="https://www.instagram.com/hablafacilpe/">
              <p>Instagram</p>
            </a>
              <p className='linkFooter'>Facebook</p>
            <a href="mailto:somoshablafacil@gmail.com">
              <p>Correo</p>
            </a>
          <br />
          <p>
            ©2021, Habla Fácil en colaboración con Laura Jiménez,Milsca Vega,
            Aurelis Moreno. Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}