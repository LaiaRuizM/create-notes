import { useState } from "react";

const NoteItem = ({
  allNotes,
  newNote,
  allCategory,
  index,
  id,
  title,
  content,
  categoryTheme,
}) => {
  const [colorNote, setColorNote] = useState("#86E1E0");
  return (
    <li>
      List
      <div>
        <div>
          <small>Category</small>
          <h3>Title</h3>
          <p>Content</p>
        </div>
        <span></span>
        <span>
          <i>icon edit-pencil</i>
          <i>icon trash</i>
        </span>
      </div>
    </li>
  );
};

export default NoteItem;
