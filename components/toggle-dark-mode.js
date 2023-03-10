import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ToggleDarkMode() {

    const themeApi = useTheme()
    const { theme, setTheme } = themeApi;
    
    useEffect(() => { /* <========= if you set the theme as dark, the value should be checked */
        setTheme(theme);
        if(theme === "dark") document.body.classList.add("dark");
        else document.body.classList.remove("dark");
        let darkModeToggle = document.querySelector('#dark-mode-switch');
        darkModeToggle.checked = ((theme === "dark") ? true : false);
    }, [])

    /* handles dark mode toggle */
    const handleDarkMode = () => {
        setTheme(theme === "dark" ? 'light' : 'dark') // changes storage variable value
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