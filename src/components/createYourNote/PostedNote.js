const PostedNote = ({ handleCreateNewNote, newNote, allCategory }) => {
  const categorySelected = allCategory.map((category, index) => {
    return (
      <option key={index} value={category.name}>
        #{category.name}
      </option>
    );
  });
  return (
    <section>
      <fieldset>
        <legend>CREATE YOUR NOTE HERE:</legend>
        <div>
          <label htmlFor="title">Title</label>
          <input
            value={newNote.title}
            type="text"
            required
            placeholder="Introduce your title:"
            maxLength="20"
            title="You can introduce here the title of your to do"
          />
          <label htmlFor="content">Description</label>
          <textarea
            value={newNote.content}
            name="content"
            // id=""
            cols="25"
            rows="5"
            placeholder="Introduce your description"
            maxLength="100"
          ></textarea>
          <label htmlFor="categoryTheme">Category</label>
          <select
            name="categoryTheme"
            //   id=""
            value={newNote.categoryTheme}
          >
            {categorySelected}
          </select>
        </div>
        <div>
          <button type="submit">Create note</button>
          <button type="reset">Delete note</button>
        </div>
      </fieldset>
    </section>
  );
};

export default PostedNote;
