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
        <div className="header__div">
          <h1 className="header__div--title">
            What can we do today? Organize your day!
          </h1>
          <img
            className="header__div--image"
            src={headerImg}
            alt="Sticky notes"
            title="Sticky notes"
          />
        </div>
      </header>
      <main className="main">
        <section className="section">Section left</section>
        <aside className="aside">Aside right</aside>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
