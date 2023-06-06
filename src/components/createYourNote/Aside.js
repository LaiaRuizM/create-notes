import PostedNote from "./PostedNote";

const Aside = ({ handleCreateNewNote, newNote, allCategory }) => {
  return (
    <aside className="aside">
      <PostedNote
        handleCreateNewNote={handleCreateNewNote}
        newNote={newNote}
        allCategory={allCategory}
      ></PostedNote>
    </aside>
  );
};

export default Aside;
