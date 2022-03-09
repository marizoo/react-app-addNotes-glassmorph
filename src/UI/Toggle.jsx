import React from "react";

const Toggle = ({ handleToggleDarkMode }) => {
    return (
        <div class="toggle-container">
            <input
                type="checkbox"
                id="switch"
                name="theme"
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
            />
            <label for="switch">Toggle</label>
        </div>
    );
};

export default Toggle;

// onClick={() =>
//     handleToggleDarkMode(
//         (previousDarkMode) => !previousDarkMode
//     )
// }
