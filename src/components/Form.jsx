/* eslint-disable react/prop-types */
import { useState } from "react";
// import Button from "./Button";

function Form({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    addNote(title, body);
    setTitle("");
    setBody("");
  }

  function handleChangeInput(e) {
    setTitle(e.target.value);
    // console.log(id);
  }

  function handleChangeTextarea(e) {
    setBody(e.target.value);
    // console.log(id);
  }

  return (
    <div className="note-input">
      <form action="" onSubmit={handleSubmit}>
        <label className="note-input__title">Judul Catatan</label>
        <input
          type="text"
          placeholder=" judul catatan"
          value={title}
          onChange={handleChangeInput}
          maxLength={15}
          className="note-input__title"
        />
        <br />
        <label htmlFor="">Isi Catatan</label>
        <textarea
          className="note-input__body"
          type="textarea"
          name=""
          id=""
          placeholder="isi catatan anda"
          max={100}
          value={body}
          onChange={handleChangeTextarea}
        />
        <button>Tambah</button>
      </form>
    </div>
  );
}

export default Form;
