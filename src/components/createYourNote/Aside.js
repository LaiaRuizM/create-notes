import PostedNote from "./PostedNote";
import "../../styles/layouts/Aside.scss";

const Aside = ({
  handleCreateNewNote,
  newNote,
  allCategory,
  noteIsEditing,
  resetPostedNote,
  handleUpdateNote,
  handleInputNote,
}) => {
  return (
    <aside className="aside">
      <PostedNote
        handleCreateNewNote={handleCreateNewNote}
        newNote={newNote}
        allCategory={allCategory}
        noteIsEditing={noteIsEditing}
        resetPostedNote={resetPostedNote}
        handleUpdateNote={handleUpdateNote}
        handleInputNote={handleInputNote}
      ></PostedNote>
    </aside>
  );
};

export default Aside;
