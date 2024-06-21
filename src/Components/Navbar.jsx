import React from 'react'
import { routes } from "./utils/routes"
import { Link, useNavigate } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
 const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}> volver</button>
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
      <button>Change theme</button>
    </nav>
  );
}

export default Navbar