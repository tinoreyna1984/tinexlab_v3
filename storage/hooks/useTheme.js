import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
    return useLocalStorage('local-theme', 'light');
}