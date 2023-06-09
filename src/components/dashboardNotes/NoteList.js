import NoteItem from "./NoteItem";
import "../../styles/layouts/NoteList.scss";

const NoteList = ({
  userNotes,
  newNote,
  allCategory,
  deleteAllNotes,
  handleDeleteNote,
  handleEditNote,
}) => {
  const eachNote = userNotes.map((note, index) => {
    return (
      <NoteItem
        key={note.id + note.title}
        index={index}
        id={note.id}
        title={note.title}
        content={note.content}
        newNote={newNote}
        allCategory={allCategory}
        categoryTheme={note.categoryTheme}
        handleDeleteNote={handleDeleteNote}
        handleEditNote={handleEditNote}></NoteItem>
    );
  });
  return (
    <section className="note__section">
      {userNotes.length !== 0 ? (
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
