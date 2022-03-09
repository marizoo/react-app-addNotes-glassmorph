import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

const DUMMY_NOTES = [
    {
        id: nanoid(),
        text: "This is my First Note",
        date: "09/03/2022",
    },
    {
        id: nanoid(),
        text: "This is my Second Note",
        date: "12/03/2022",
    },
    {
        id: nanoid(),
        text: "This is my Third Note",
        date: "07/04/2022",
    },
];

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const [notes, setNotes] = useState(DUMMY_NOTES);

    // Adding notes
    const handleAddNote = (newNote) => {
        const date = new Date();
        const addToNotes = {
            id: nanoid(),
            text: newNote,
            date: date.toLocaleDateString(),
        };

        const allNotes = [...notes, addToNotes];

        setNotes(allNotes);
    };

    // Delete Note
    const handleDeleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    // Retrieve data from local storage (parse: convert from string to json)
    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem("react-app-glassmorph-notes")
        );
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    // Save to local storage (stringify: convert text to strings)
    useEffect(() => {
        localStorage.setItem(
            "react-app-glassmorph-notes",
            JSON.stringify(notes)
        );
    }, [notes]);

    return (
        <div className={`${darkMode && "dark-mode"}`}>
            <div className="app">
                <div className="app-container">
                    <Header
                        className={`${darkMode && "dark-mode"}`}
                        handleToggleDarkMode={setDarkMode}
                    />
                    <NotesList
                        notes={notes}
                        onHandleDeleteNote={handleDeleteNote}
                        onHandleAddNote={handleAddNote}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
