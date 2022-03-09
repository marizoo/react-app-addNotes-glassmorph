import React from "react";
import Toggle from "../UI/Toggle";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <Toggle handleToggleDarkMode={handleToggleDarkMode} />
            {/* <button
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="button glassmorph"
            >
                Toggle Button
            </button> */}
        </div>
    );
};

export default Header;
