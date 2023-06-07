const PostedNote = ({
  handleCreateNewNote,
  newNote,
  allCategory,
  noteIsEditing,
  resetPostedNote,
  handleUpdateNote,
  handleInputNote,
}) => {
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    handleInputNote(name, value);
  };

  const categorySelected = allCategory.map((categoryTheme, index) => {
    return (
      <option key={index} value={categoryTheme.name}>
        #{categoryTheme.name}
      </option>
    );
  });

  const handleResetNote = (event) => {
    event.preventDefault();
    resetPostedNote();
  };

  const handlePostNote = (event) => {
    event.preventDefault();
    noteIsEditing ? handleUpdateNote() : handleCreateNewNote();
  };

  return (
    <section>
      <form onReset={handleResetNote} onSubmit={handlePostNote}>
        <legend>
          {noteIsEditing ? "Edit your note:" : "Create your note:"}
        </legend>
        <div>
          <label htmlFor="title">Title</label>
          <input
            value={newNote.title}
            type="text"
            required
            placeholder="Introduce your title:"
            maxLength="20"
            name="title"
            title="You can introduce here the title of your to do"
            onChange={handleInputChange}
          />
          <label htmlFor="content">Description</label>
          <textarea
            value={newNote.content}
            name="content"
            cols="25"
            rows="5"
            placeholder="Introduce your description"
            maxLength="100"
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor="categoryTheme">Category</label>
          <select
            name="categoryTheme"
            value={newNote.categoryTheme}
            onChange={handleInputChange}
          >
            {categorySelected}
          </select>
        </div>
        <div>
          <button type="submit">
            {noteIsEditing ? "Update note" : "Post note"}
          </button>
          <button type="reset">
            {noteIsEditing ? "Dismiss changes" : "Dismiss note"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PostedNote;
