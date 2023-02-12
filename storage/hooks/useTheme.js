import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
    return useLocalStorage('theme', 'light');
}