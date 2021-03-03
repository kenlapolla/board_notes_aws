import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/Board.css";
import Note from "./Note";

import{ addNewNote, deleteNote, setInitialNoteState} from '../actions/boardAction';


const Board= ({onAddNote, onDeleteNote,notes}) => {
  const [editMode, setEditMode] = useState(false);
  // const [notes, setNotes] = useState([
  //   {
  //     id: Date.now(),
  //     title: "Class Notes",
  //     body: "Always use constructors when extending another class",
  //   },
  //   {
  //     id: Date.now(),
  //     title: "My New Address",
  //     body: "2001 N Lonhill Phoenix, AZ 81234",
  //   },
  //   {
  //     id: Date.now(),
  //     title: "React Notes",
  //     body: "Everything in React is a component",
  //   },
  // ]);

  // function addNote() {
  //   setNotes((currNotes) => [
  //     ...notes,
  //     {
  //       id: Date.now(),
  //       title: "New Note Title",
  //       body: "New note body",
  //     },
  //   ]);
  //   setEditMode(true);
  // }

  // const handleDelete = (id) => {
  //   setNotes(notes.filter((note) => note.id !== id));
  // };

  return (
    <div>
      <div className="div-board">
        <div className="row">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              editMode={editMode}
              handleDelete={onDeleteNote}
            />
          ))}
        </div>
      </div>
      <div>
        <button className="btn btn-success add-button" onClick={onAddNote}>
          Add
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes
})

const mapDispatchToProps = (dispatch) => ({
  onAddNote: text => dispatch(addNewNote(text)),
  onDeleteNote: text => dispatch(deleteNote(text)),
  onInitializeNotes: () => dispatch(setInitialNoteState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);
