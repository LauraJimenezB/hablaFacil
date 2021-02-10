import logoPic from './logoFooter.svg'
import fbPic from './fbFooter.svg'
import instaPic from './instaFooter.svg'

export function FooterH () {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerImgDiv">
          <img src={logoPic} alt={"logoF pic"} className="imgFooter" />
        </div>
        <div className="footerDiv">
          <p>Encuentranos en:</p>
          <div>
            <a href="/#">
              <img src={fbPic} alt={"fbF pic"} className="imgF" />
            </a>
            <a href="https://www.instagram.com/hablafacilpe/">
              <img src={instaPic} alt={"instaF pic"} className="imgF" />
            </a>
          </div>
          <br />
          <p>Somos Habla facil </p>
          <p>Aqui desmenuzamos información para que tu no tengas que hacerlo</p>
          <br />
          <p>Hecho en Perú con amor del bueno</p>
          <p>
            ©2021 Habla Fácil en colaboración con Laura Jiménez,Milsca Vega,
            Aurelis Moreno. Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}