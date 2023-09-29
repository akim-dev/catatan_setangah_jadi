/* eslint-disable react/prop-types */

function Button({ id, toggleTaskCompleted, archived, toggleDelete }) {
  return (
    <div className="note-item__action">
      {!archived ? (
        <>
          <button onClick={() => toggleTaskCompleted(id)} className="">
            Archive
          </button>
          <button onClick={() => toggleDelete(id)} className="">
            Delete
          </button>
        </>
      ) : (
        <>
          <button onClick={() => toggleTaskCompleted(id)} className="">
            Aktif
          </button>
          <button onClick={() => toggleDelete(id)} className="">
            Delete
          </button>
        </>
      )}
    </div>
  );
}
export default Button;
