const PostedNote = () => {
  return (
    <section>
      <fieldset>
        <legend>CREATE YOUR NOTE HERE:</legend>
        <div>
          <label htmlFor="title">Title</label>
          <input
            // value={""}
            type="text"
            required
            placeholder="Introduce your title:"
            maxLength="20"
            title="You can introduce here the title of your to do"
          />
          <label htmlFor="content">Description</label>
          <textarea
            // value=""
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
            //   value=""
          >
            <option value="color1">Color one</option>
            <option value="color2">Color two</option>
            <option value="color3">Color three</option>
            <option value="color4">Color four</option>
            <option value="color5">Color five</option>
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
