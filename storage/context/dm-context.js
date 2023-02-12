import { useTheme } from "../hooks/useTheme";

import { createContext, useContext } from "react";

const DarkModeContext = createContext('light');
const SetDarkModeContext = createContext(
    (value) => {
        console.log('Default function:', value);
    }
);

/* hooks for dark mode */
export function useDarkModeContext() {
    return useContext(DarkModeContext);
}
export function useSetDarkModeContext() {
    return useContext(SetDarkModeContext);
}

/* context */
export function DarkModeContextProvider({ children }) {
    const [theme, setTheme] = useTheme();
    return (
        <DarkModeContext.Provider value={theme}>
            <SetDarkModeContext.Provider value={setTheme}>
                {children}
            </SetDarkModeContext.Provider>
        </DarkModeContext.Provider>
    );
}
