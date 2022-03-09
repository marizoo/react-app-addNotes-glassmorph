import React from "react";

const AddNotes = () => {
    return (
        <div className="addNotes glassmorph">
            <textarea
                className="addNotes-text"
                cols="10"
                rows="6"
                placeholder="Add Your Notes..."
            ></textarea>
            <div className="addNotes-footer">
                <small className="addNotes-footer-chars">200 remaining</small>
                <button className="glassmorph button addNotes-footer-btn">
                    Add Note
                </button>
            </div>
        </div>
    );
};

export default AddNotes;
