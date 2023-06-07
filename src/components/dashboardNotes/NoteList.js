import NoteItem from "./NoteItem";

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
    <section>
      {allNotes.length !== 0 ? (
        <div>
          <button onClick={deleteAllNotes}>Delete all notes</button>
        </div>
      ) : (
        ""
      )}
      <ul>{eachNote}</ul>
    </section>
  );
};

export default NoteList;
