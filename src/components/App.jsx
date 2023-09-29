/* eslint-disable react/prop-types */
import { useState } from "react";
import Notes from "./Notes";
import Form from "./Form";
import Header from "./Header";

function App({ data }) {
  const [note, setNote] = useState(data);

  // toggle task completed
  function toggleTaskCompleted(id) {
    const updateNotes = note.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          archived: !task.archived,
        };
      }
      return task;
    });
    setNote(updateNotes);
  }

  // toggle delete Task
  function toggleDelete(id) {
    const reminingNotes = note.filter((task) => task.id !== id);
    setNote(reminingNotes);
  }

  // add note
  function addNote(title, body) {
    const newNote = {
      id: Math.random(),
      title: title,
      body: body,
      createdAt: new Date().toLocaleDateString("id-ID"),
      archived: false,
    };
    setNote([...note, newNote]);
  }

  // filter task yang actif
  const taskActive = note.filter((task) => task.archived === false);
  const taskText = `${taskActive.length} notes`;

  // filter task yang archived
  const taskArchived = note.filter((task) => task.archived === true);
  // const taskTextArchived = `${taskArchived.length} notes`;
  const taskTextArchived = `${taskArchived.length} notes`;

  // tampil task yang aktif
  const tampilSaja = taskActive.map((task) => (
    <Notes
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      title={task.title}
      body={task.body}
      createdAt={task.createdAt}
      archived={task.archived}
      id={task.id}
      toggleDelete={toggleDelete}
      // editNote={editTask}
    />
  ));

  const tidakTampil = taskArchived.map((task) => (
    <Notes
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      archived={task.archived}
      id={task.id}
      title={task.title}
      body={task.body}
      createdAt={task.createdAt}
      toggleDelete={toggleDelete}
    />
  ));

  return (
    <div>
      <Header dataHeader={note} />
      <div className="note-app__body">
        <Form addNote={addNote} />
        <div className="notes-list__empty-message">{taskText}</div>
        <div className="notes-list">{tampilSaja}</div>
        <div className="notes-list__empty-message">{taskTextArchived}</div>
        <div className="notes-list">{tidakTampil}</div>
      </div>
    </div>
  );
}

export default App;
