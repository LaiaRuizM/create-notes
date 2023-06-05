import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import "../styles/App.scss";
import headerImg from "../images/header-img.png";
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
      <main className="main">
        <section>Section left</section>
        <aside>Aside right</aside>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
