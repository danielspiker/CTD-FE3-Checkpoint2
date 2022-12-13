import { useContext } from 'react'
import { createContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider(props) {
  const themeLocalStorage = localStorage.getItem('theme')
  const [theme, setTheme] = useState(
    themeLocalStorage === null ? 'dark' : themeLocalStorage
  )

  function changeTheme(themReceived) {
    if (themReceived !== theme) {
      setTheme(themReceived)
      localStorage.setItem('theme', themReceived)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}
