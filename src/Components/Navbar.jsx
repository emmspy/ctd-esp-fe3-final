import React from 'react'
import { routes } from "./utils/routes"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../public/images/DH.png"
import back from "../../public/images/arrowback.webp"
import { useDentistContext } from "../Context/Context"
import dark from "../../public/images/dark.png"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
 const navigate = useNavigate();
 const { state, dispatch } = useDentistContext();

  return (
    <div className="container-navbar">
      <div>
        <img src={logo} alt="" className="container-navbar-logo" />
      </div>
      <nav className={state.theme === "dark" ? "dark" : ""}>
        <button className="navbar-button" onClick={() => navigate("/")}>
          {" "}
          <img src={back} alt="" className="image-back" />
        </button>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <a href={routes.home}>
          <h1>Home</h1>
        </a>
        <a href={routes.contact}>
          <h1>Contactos</h1>
        </a>
        <a href={routes.favs}>
          <h1>Favoritos</h1>
        </a>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button
          className="navbar-button"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          <img src={dark} alt="" className="dark-mode" />
        </button>
      </nav>
    </div>
  );
}

export default Navbar