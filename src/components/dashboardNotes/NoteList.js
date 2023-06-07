import NoteItem from "./NoteItem";

const NoteList = ({ allNotes, newNote, allCategory }) => {
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
      ></NoteItem>
    );
  });
  return (
    <section>
      <div>
        <button>Delete notes</button>
      </div>
      <ul>{eachNote}</ul>
    </section>
  );
};

export default NoteList;
