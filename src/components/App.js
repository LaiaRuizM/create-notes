import Aside from "./createYourNote/Aside";
import Footer from "./Footer";
import "../styles/App.scss";
import headerImg from "../images/header-img.png";
import { useEffect, useState } from "react";

function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [allCategory, setAllCategory] = useState([
    { name: "general", color: "#86E1E0" },
    { name: "activities", color: "#FDE780" },
    { name: "work", color: "#B494C5" },
    { name: "personal", color: "#C5EA8B" },
    { name: "birthday", color: "#F7ABC7" },
    { name: "urgent", color: "#FBBAA4" },
    { name: "ASAP", color: "#EE9392" },
  ]);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    categoryTheme: "general",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userNotes"));
    if (data) {
      setAllNotes(data.allNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userNotes", JSON.stringify({ allNotes }));
  });

  /* FUNCIONES HANDLER */
  const handleCreateNewNote = () => {
    setAllNotes((eachNote) => eachNote.concat(newNote));
  };

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
        <Aside></Aside>
        <section className="section">Section left</section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
