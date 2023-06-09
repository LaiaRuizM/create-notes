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
      <div className="aside__header">
        <h2 className="aside__header__title">Notes</h2>
      </div>
      <div className="aside__content">
        <PostedNote
          handleCreateNewNote={handleCreateNewNote}
          newNote={newNote}
          allCategory={allCategory}
          noteIsEditing={noteIsEditing}
          resetPostedNote={resetPostedNote}
          handleUpdateNote={handleUpdateNote}
          handleInputNote={handleInputNote}></PostedNote>
      </div>
    </aside>
  );
};

export default Aside;
