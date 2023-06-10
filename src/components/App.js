import { useEffect, useState } from "react";
import Aside from "./createYourNote/Aside";
import NoteList from "./dashboardNotes/NoteList";
import Footer from "./Footer";
import headerImg from "../images/header-img.png";
import "../styles/App.scss";

function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [allCategory, setAllCategory] = useState([
    { name: "general", color: "#86e1e0" },
    { name: "activities", color: "#Fde780" },
    { name: "work", color: "#b494c5" },
    { name: "personal", color: "#c5ea8b" },
    { name: "birthday", color: "#f7abc7" },
    { name: "urgent", color: "#fbbaa4" },
    { name: "ASAP", color: "#ee9392" },
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
    localStorage.setItem("userNotes", JSON.stringify({ allNotes, newId }));
  });

  const handleCreateNewNote = () => {
    setAllNotes(eachNote => eachNote.concat(newNote));
    setNewId(newId + 1);
    resetPostedNote();
  };

  const resetPostedNote = () => {
    setNewNote({
      ...newNote,
      title: "",
      content: "",
      categoryTheme: "general",
    });
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

  const handleDeleteNote = index => {
    setAllNotes(allNotes.filter((eachNote, i) => i !== index));
  };

  const handleEditNote = index => {
    setNewNote(allNotes[index]);
    setNoteIsEditing(true);
    setIndexIsEditing(index);
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
          handleInputNote={handleInputNote}></Aside>
        <NoteList
          userNotes={allNotes}
          newNote={newNote}
          allCategory={allCategory}
          deleteAllNotes={deleteAllNotes}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}></NoteList>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
