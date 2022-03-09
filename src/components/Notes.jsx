import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Notes = ({ id, text, date, onHandleDeleteNote }) => {
    return (
        <div className="notes glassmorph">
            <div className="notes-text">{text}</div>
            <div className="notes-footer">
                <small className="notes-footer-date">{date}</small>
                <MdDeleteForever
                    onClick={() => onHandleDeleteNote(id)}
                    className="notes-footer-icon"
                />
            </div>
        </div>
    );
};

export default Notes;
