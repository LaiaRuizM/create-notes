const PostedNote = ({
  handleCreateNewNote,
  newNote,
  allCategory,
  noteIsEditing,
  resetPostedNote,
  handleUpdateNote,
  handleInputNote,
}) => {
  const categorySelected = allCategory.map((category, index) => {
    return (
      <option key={index} value={category.name}>
        #{category.name}
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

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    handleInputNote(name, value);
  };

  return (
    <section>
      <fieldset onReset={handleResetNote} onSubmit={handlePostNote}>
        <legend>CREATE YOUR NOTE HERE:</legend>
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
      </fieldset>
    </section>
  );
};

export default PostedNote;
