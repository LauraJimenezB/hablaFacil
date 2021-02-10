import {React} from "react";
import "./Nav.css";
import logoSecundary from "../assets/img/logo-secundary.png";

const Nav = (searchField, setSearchField) => {

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          <img src={logoSecundary} alt="Habla Fácil" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/voto">
                Elecciones 2021
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Congreso
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Medidas sanitarias
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/#">Action</a></li>
                <li><a className="dropdown-item" href="/#">Another action</a></li>
                <li><a className="dropdown-item" href="/#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              value={searchField} onChange={(e)=>setSearchField(e.target.value)}
            />
            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> */}
          </form>
        </div>
      </nav>
  );
};

export default Nav;
