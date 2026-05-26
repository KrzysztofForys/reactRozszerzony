import { createContext, use, useReducer, type Dispatch } from "react";
type ThemeState = {
    mode: 'dark' | 'light';
}
type ThemeAction = | {type: 'TOGGLE'}

type ThemeProviderProps = {
    children: React.ReactNode;
}
type ThemeContextType = {
    state: ThemeState;
    dispatch: Dispatch<ThemeAction>;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

export const themeReducer = (state: ThemeState, action: ThemeAction) : ThemeState =>{
    switch(action.type){
        case 'TOGGLE':
            return {...state, mode: state.mode === 'dark' ? 'light' : 'dark'}
    }
}
export const ThemeProvider = ({children} : ThemeProviderProps) => {
    const [state, dispatch] = useReducer(themeReducer, {mode: 'dark'});
    return(
        <ThemeContext value={{state, dispatch}}>
            {children}
        </ThemeContext>
    )
}
export const useTheme = () => {
    const ctx = use(ThemeContext);
    if(!ctx) throw new Error('useTheme musi być użyty w ThemeProvider');
    return ctx;
}
interface A {
    /** To jest oficjalny opis zmiennej `a`, który zobaczysz w podpowiedziach edytora. */
    a: number;
}