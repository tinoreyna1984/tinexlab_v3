import { toggleTheme } from "../helpers/toggleTheme";
import { useDarkModeContext, useSetDarkModeContext } from "../storage/context/dm-context";

export default function ToggleDarkMode() {

    const darkMode = useDarkModeContext();
    const setStoredMode = useSetDarkModeContext();

    /* handles dark mode toggle */
    const handleDarkMode = () => {
        setStoredMode(toggleTheme(darkMode)); // changes storage variable value
        document.body.classList.toggle("dark"); // adds/removes "dark" class
    }

    return (
        <>
            <div id="dark-mode"> {/* Toggle dark mode */}
                <span className="material-symbols-outlined"> light_mode </span>
                <label className="switch">
                    <input id="dark-mode-switch" type="checkbox" onClick={handleDarkMode} />
                    <span className="toggle-control"></span>
                </label>
                <span className="material-symbols-outlined"> dark_mode </span>
            </div>
        </>
    );
}