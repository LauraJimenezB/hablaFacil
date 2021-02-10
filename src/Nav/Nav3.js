import {React, useState} from "react";
import "./Nav3.css";
import logoSecundary from "../assets/img/logo-secundary.png";
import menuIcon from "../assets/img/menuIcon.svg";
import xIcon from "../assets/img/closeIcon.svg";

const Nav3 = (searchField, setSearchField, onSearch) => {
  const [menuVisibility, setMenuVisibility] = useState(true);

  function clickMenu() {
      setMenuVisibility(!menuVisibility)
  }

  return (
          <nav>
          <div className='logo'><img src={logoSecundary} alt='logo'/></div>
          <button className='menuBtn' onClick={clickMenu}><img className={menuVisibility ? 'menuIcon' : 'xIcon'} src={menuVisibility ? menuIcon : xIcon} alt='menuIcon'/></button> 
          <div className='menuItems'>
          <ul className={menuVisibility ? 'styleShow' : 'styleHidden'}>
              <li><a className='active' href='/#'>Home</a></li>
              <li>
                  <a href='/elecciones' className='dropdownBtn'>Elecciones 2021</a>
                  <div className='dropdownMenu'>
                    <ul>
                        <li><a href='/elecciones-pautas-generales'>Pautas generales</a></li>
                        <li><a href='/elecciones-medidas-sanitarias'>Medidas sanitarias</a></li>
                        <li><a href='/elecciones-sanciones'>Sanciones por no votar</a></li>
                    </ul>
                  </div>
              </li>
              <form>
          </form>
          </ul>
          <input
              type="search"
              placeholder="     Buscar"
              value={searchField} onChange={(e)=>setSearchField(e.target.value)} className='inputMenu'
            />
          </div>
      </nav>
  );
};

export default Nav3;