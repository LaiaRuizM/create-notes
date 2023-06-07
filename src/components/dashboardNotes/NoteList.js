import NoteItem from "./NoteItem";
import "../../styles/layouts/NoteList.scss";

const NoteList = ({
  allNotes,
  newNote,
  allCategory,
  deleteAllNotes,
  handleDeleteNote,
  handleEditNote,
}) => {
  const eachNote = allNotes.map((note, index) => {
    return (
      <NoteItem
        index={index}
        id={note.id}
        key={note.id + note.title}
        title={note.title}
        content={note.title}
        newNote={newNote}
        allCategory={allCategory}
        categoryTheme={note.categoryTheme}
        handleDeleteNote={handleDeleteNote}
        handleEditNote={handleEditNote}
      ></NoteItem>
    );
  });
  return (
    <section className="note__section">
      {allNotes.length !== 0 ? (
        <div className="note__section__btn">
          <button onClick={deleteAllNotes}>Delete all notes</button>
        </div>
      ) : (
        ""
      )}
      <ul className="note__section__list">{eachNote}</ul>
    </section>
  );
};

export default NoteList;
