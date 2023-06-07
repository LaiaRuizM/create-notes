import Aside from "./createYourNote/Aside";
import NoteList from "./dashboardNotes/NoteList";
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
  const [newId, setNewId] = useState(1);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    categoryTheme: "general",
    id: 0,
  });
  const [noteIsEditing, setNoteIsEditing] = useState(false);
  const [indexIsEditing, setIndexIsEditing] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userNotes"));
    if (data) {
      setAllNotes(data.allNotes);
      setNewId(data.newId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userNotes", JSON.stringify({ allNotes }));
  });

  const handleCreateNewNote = () => {
    setAllNotes((eachNote) => eachNote.concat(newNote));
    setNewId(newId + 1);
  };

  const resetPostedNote = () => {
    setNewNote({ ...newNote, title: ", content: ", categoryTheme: "general" });
    setNoteIsEditing(false);
  };

  const handleUpdateNote = () => {
    setNoteIsEditing(false);
    resetPostedNote();
    const updatingPostingNote = allNotes;
    updatingPostingNote[indexIsEditing].title = newNote.title;
    updatingPostingNote[indexIsEditing].content = newNote.content;
    updatingPostingNote[indexIsEditing].categoryTheme = newNote.categoryTheme;
    setAllNotes(updatingPostingNote);
  };

  const handleInputNote = (name, value) => {
    if (allNotes.length === 0) {
      setNewId(1);
    }
    if (newNote.id !== newId) {
      setNewNote({ ...newNote, id: newId, [name]: value });
    } else {
      setNewNote({ ...newNote, [name]: value });
    }
  };

  const deleteAllNotes = () => {
    setAllNotes([]);
    setNewId(1);
  };

  const handleDeleteNote = (i) => {
    setAllNotes(allNotes.filter((note, index) => index !== i));
  };

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
        <Aside
          handleCreateNewNote={handleCreateNewNote}
          newNote={newNote}
          allCategory={allCategory}
          noteIsEditing={noteIsEditing}
          resetPostedNote={resetPostedNote}
          handleUpdateNote={handleUpdateNote}
          handleInputNote={handleInputNote}
        ></Aside>
        <NoteList
          allNotes={allNotes}
          newNote={newNote}
          allCategory={allCategory}
          deleteAllNotes={deleteAllNotes}
          handleDeleteNote={handleDeleteNote}
        ></NoteList>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
