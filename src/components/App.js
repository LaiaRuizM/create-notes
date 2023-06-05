/* SECCIÓN DE IMPORT */
// - De React
// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// - Nuestros
// - Sass
import "../styles/App.scss";
// - Imágenes
import headerImg from "../images/header-img.png";
/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (código cuando carga la página) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* PROP-TYPES */

  return (
    <>
      <header className="header">
        <h1 className="header__title">
          What can we do today? Organize your day!
        </h1>
        <div className="header__div">
          <img
            className="header__image"
            src={headerImg}
            alt="Sticky notes"
            title="Sticky notes"
          />
        </div>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
