import React from "react";
import AddNotes from "./AddNotes";
import Notes from "./Notes";

const NotesList = ({ notes, onHandleDeleteNote, onHandleAddNote }) => {
    return (
        <div className="notesList">
            {notes.map((note) => (
                <Notes
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    onHandleDeleteNote={onHandleDeleteNote}
                />
            ))}
            <AddNotes onHandleAddNote={onHandleAddNote} />
        </div>
    );
};

export default NotesList;
