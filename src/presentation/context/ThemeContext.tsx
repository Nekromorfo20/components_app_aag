import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { darkColors, lightColors, ThemeColors } from "../../config/theme/theme"
import { Appearance, AppState, useColorScheme } from "react-native"

type ThemeColor = 'light' | 'dark'

interface ThemeContextProps {
    currentTheme : ThemeColor
    colors : ThemeColors
    isDark? : boolean
    setTheme : (them : ThemeColor) => void
}
/*  Documentación de React Native "Themes": https://reactnavigation.org/docs/themes/ */
/*  Documentación de React Native "AppState": https://reactnative.dev/docs/appstate */

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children } : PropsWithChildren) => {
    const colorScheme = useColorScheme() // Obtener tema "dark-ligth" del sistema operativo
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light')

    const setTheme = (theme : ThemeColor) => {
        setCurrentTheme(theme)
    }

    /* Cambiar tema global de app usando hook "useColorScheme()" */
    useEffect(() => {
       if(colorScheme === 'dark') {
        setCurrentTheme('dark')
       } else {
        setCurrentTheme('light')
       }
    }, [colorScheme])

    /* Cambiar tema global de app usando "AppState" */
    //   useEffect(() => {
    //     const subscription = AppState.addEventListener('change', nextAppState => {
    //         const colorScheme = Appearance.getColorScheme()
    //         setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light')
    //     })

    //     return () => {
    //         subscription.remove()
    //     }
    //   }, [])

    return (
        <ThemeContext.Provider
            value={{
                currentTheme: currentTheme,
                isDark: (currentTheme !== 'light'),
                colors: (currentTheme === 'light' ? lightColors : darkColors),
                setTheme: setTheme
            }}
        >{children}</ThemeContext.Provider>
    )
}