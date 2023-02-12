import { useEffect, useState } from "react";

export function useLocalStorage(key, fallbackValue) {

    const [value, setValue] = useState(fallbackValue);

    useEffect(() => { /* look for stored value */
        const stored = localStorage.getItem(key);
        setValue(stored ? JSON.parse(stored) : fallbackValue);
    }, [fallbackValue, key]);

    useEffect(() => { /* use stored value previously found */
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}