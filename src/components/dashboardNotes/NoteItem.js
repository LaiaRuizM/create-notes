import { useState } from "react";
import "../../styles/layouts/NoteItem.scss";

const NoteItem = ({
  newNote,
  allCategory,
  index,
  id,
  title,
  content,
  categoryTheme,
  handleDeleteNote,
  handleEditNote,
}) => {
  const [colorNote, setColorNote] = useState("#86E1E0");
  const handleToEditNote = () => {
    handleEditNote(index);
  };

  const handleToDeleteNote = () => {
    handleDeleteNote(index);
  };

  const noteCategoryTheme = allCategory.find(
    (eachCategoryTheme) => eachCategoryTheme.name === categoryTheme
  );

  return (
    <li
      className={`note__item ${
        newNote.title.length !== 0 || newNote.content.length !== 0
          ? "unactive"
          : "active"
      }`}
    >
      <div
        className="note__item__container"
        style={{ background: noteCategoryTheme.colorNote }}
      >
        <div className="note__item__container__text">
          <small>#{categoryTheme}</small>
          <h2>
            {id}-{title}
          </h2>
          <p>{content}</p>
        </div>
        <span></span>
        <div className="note__item__container__div">
          <i
            className="fas fa-pencil-alt"
            index={index}
            onClick={handleToEditNote}
          ></i>
          <i
            className="fas fa-eraser"
            index={index}
            onClick={handleToDeleteNote}
          ></i>
        </div>
      </div>
    </li>
  );
};

export default NoteItem;
