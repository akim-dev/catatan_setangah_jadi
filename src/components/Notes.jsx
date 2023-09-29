/* eslint-disable react/prop-types */

import Button from "./Button";

// eslint-disable-next-line react/prop-types
function Notes({
  id,
  title,
  body,
  createdAt,
  archived,
  toggleTaskCompleted,
  toggleDelete,
}) {
  return (
    <div className="note-item">
      <div className="note_item__content">
        <h3 className="note-input__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
        <Button
          id={id}
          toggleTaskCompleted={toggleTaskCompleted}
          archived={archived}
          toggleDelete={toggleDelete}
        />
      </div>
    </div>
  );
}

export default Notes;
