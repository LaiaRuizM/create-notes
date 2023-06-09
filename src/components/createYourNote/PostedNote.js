import "../../styles/layouts/PostedNote.scss";

const PostedNote = ({
  handleCreateNewNote,
  newNote,
  allCategory,
  noteIsEditing,
  resetPostedNote,
  handleUpdateNote,
  handleInputNote,
}) => {
  const handleInputChange = ev => {
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

  const handleResetNote = event => {
    event.preventDefault();
    resetPostedNote();
  };

  const handlePostNote = event => {
    event.preventDefault();
    noteIsEditing ? handleUpdateNote() : handleCreateNewNote();
  };

  return (
    <section>
      <form
        className="form"
        onReset={handleResetNote}
        onSubmit={handlePostNote}>
        <legend className="form__legend">
          {noteIsEditing ? "Edit your note:" : "Create your note:"}
        </legend>
        <div className="form__container">
          <label htmlFor="title" className="form__container__label">
            Title:
          </label>
          <input
            value={newNote.title}
            className="form__container__input"
            type="text"
            required
            placeholder="Introduce your title:"
            maxLength="20"
            name="title"
            title="You can introduce here the title of your to do"
            onChange={handleInputChange}
          />
          <label htmlFor="content" className="form__container__label">
            Description:
          </label>
          <textarea
            value={newNote.content}
            name="content"
            rows="5"
            cols="25"
            placeholder="Introduce your description"
            maxLength="100"
            onChange={handleInputChange}
            className="form__container__textarea"></textarea>
          <label htmlFor="categoryTheme" className="form__container__label">
            Category:
          </label>
          <select
            name="categoryTheme"
            onChange={handleInputChange}
            value={newNote.categoryTheme}
            className="form__container__select">
            {categorySelected}
          </select>
        </div>
        <div className="form__btns">
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
